const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function Q(executor) {
    let self = this
    self.status = PENDING
    self.final = void 0 // Promise的终值
    self.reason = void 0 // 拒绝的理由
    self.onResolvedListeners = []
    self.onRejectedListeners = []

    try {
        executor(resolve, reject)
    } catch (err) {
        reject(err)
    }

    function resolve(value) {
        setTimeout(() => {
            if (self.status === PENDING) {
                self.status = RESOLVED
                self.final = value
                // 遍历onResolvedListeners
                self.onResolvedListeners.forEach(listener => {
                    listener(self.final)
                })
            }
        })
    }

    function reject(reason) {
        setTimeout(() => {
            if (self.status === PENDING) {
                self.status = REJECTED
                self.reason = reason
                // 遍历onRejectedListeners
                self.onRejectedListeners.forEach(listener => {
                    listener(self.reason)
                })
            }
        })
    }
}

/**
 * resolve中的值几种情况：
 * 1.普通值
 * 2.promise对象
 * 3.thenable对象/函数
 */

Q.prototype.then = function(onResolved, onRejected) {
    let self = this
    let isResolved = self.status === RESOLVED,
        isRejected = self.status === REJECTED,
        isPending = self.status === PENDING
    let newPromise

    onResolved = typeof onResolved === 'function' ? onResolved : value => value
    onRejected =
        typeof onRejected === 'function'
            ? onRejected
            : r => {
                  throw r
              }

    if (isResolved) {
        return (newPromise = new Q((resolve, reject) => {
            setTimeout(() => {
                try {
                    let value = onResolved(self.final)
                    resolvePromise(newPromise, value, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
        }))
    }

    if (isRejected) {
        return (newPromise = new Q((resolve, reject) => {
            setTimeout(() => {
                try {
                    let value = onRejected(self.reason)
                    resolvePromise(newPromise, value, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
        }))
    }

    if (isPending) {
        return (newPromise = new Q((resolve, reject) => {
            self.onResolvedListeners.push(value => {
                try {
                    let x = onResolved(value)
                    resolvePromise(newPromise, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })

            self.onRejectedListeners.push(r => {
                try {
                    let x = onRejected(r)
                    resolvePromise(newPromise, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
        }))
    }
}

function resolvePromise(promise, x, resolve, reject) {
    if (promise === x) {
        return reject(new TypeError('TypeError'))
    }

    let called = false
    if (Q.isPromise(x)) {
        if (x.status === PENDING) {
            x.then(
                y => resolvePromise(promise, y, resolve, reject),
                r => reject(r)
            )
        } else {
            x.then(resolve, reject)
        }
    } else if (x != null && (isObject(x) || isFunction(x))) {
        try {
            let then = x.then
            if (isFunction(then)) {
                then.call(
                    x,
                    y => {
                        if (called) return
                        called = true
                        resolvePromise(promise, y, resolve, reject)
                    },
                    r => {
                        if (called) return
                        called = true
                        reject(r)
                    }
                )
            } else {
                resolve(x)
            }
        } catch (err) {
            if (called) return
            called = true
            reject(err)
        }
    } else {
        resolve(x)
    }
}

Q.prototype.catch = function(reject) {
    return this.then(null, reject)
}
Q.prototype.all = function(promises = []) {}
Q.prototype.race = function(promises = []) {}

Q.resolve = function(value) {
    return new Q(resolve => {
        resolve(value)
    })
}
Q.reject = function(reason) {
    return new Q((resolve, reject) => {
        reject(reason)
    })
}

Q.isPromise = function(maybePromise) {
    return maybePromise instanceof Q
}

function isFunction(v) {
    return typeof v === 'function'
}

function isObject(obj) {
    return typeof obj === 'object'
}

Q.deferred = Q.defer = function() {
    let dfd = {}
    dfd.promise = new Q(function(resolve, reject) {
        dfd.resolve = resolve
        dfd.reject = reject
    })
    return dfd
}

/**
 * Promise/A+规范测试
 * npm i -g promises-aplus-tests
 * promises-aplus-tests Promise.js
 */

try {
    module.exports = Q
} catch (e) {}
