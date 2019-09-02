/**
 * Promise A+规范
 * @see: https://promisesaplus.com/ (官网)
 * http://www.ituring.com.cn/article/66566 (中文翻译)
 */

const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function Q(executor) {
    let self = this
    self.status = PENDING // Promise的状态，初始pending
    self.final = void 0 // Promise完成的终值
    self.reason = void 0 // Promise拒绝的理由
    self.onResolvedListeners = [] // 完成状态后的回调列表
    self.onRejectedListeners = [] // 拒绝状态后的回调列表

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

                self.onRejectedListeners.forEach(listener => {
                    listener(self.reason)
                })
            }
        })
    }
}

/**
 * 注册fulfilled状态/rejected状态对应的回调函数
 * @param  {function} onFulfilled fulfilled状态时 执行的函数
 * @param  {function} onRejected  rejected状态时 执行的函数
 * @return {function} newPromsie  返回一个新的promise对象
 */
Q.prototype.then = function(onResolved, onRejected) {
    let self = this
    let isResolved = self.status === RESOLVED,
        isRejected = self.status === REJECTED,
        isPending = self.status === PENDING
    let promise2

    onResolved = typeof onResolved === 'function' ? onResolved : value => value
    onRejected =
        typeof onRejected === 'function'
            ? onRejected
            : r => {
                  throw r
              }

    // then里面的FULFILLED/REJECTED状态时 为什么要加setTimeout ?
    // 原因:
    // 其一 2.2.4规范 要确保 onFulfilled 和 onRejected 方法异步执行(且应该在 then 方法被调用的那一轮事件循环之后的新执行栈中执行) 所以要在resolve里加上setTimeout
    // 其二 2.2.6规范 对于一个promise，它的then方法可以调用多次.（当在其他程序中多次调用同一个promise的then时 由于之前状态已经为FULFILLED/REJECTED状态，则会走的下面逻辑),所以要确保为FULFILLED/REJECTED状态后 也要异步执行onFulfilled/onRejected

    // 其二 2.2.6规范 也是resolve函数里加setTimeout的原因
    // 总之都是 让then方法异步执行 也就是确保onFulfilled/onRejected异步执行

    // 如下面这种情景 多次调用p1.then
    // p1.then((value) => { // 此时p1.status 由pedding状态 => fulfilled状态
    //     console.log(value); // resolve
    //     // console.log(p1.status); // fulfilled
    //     p1.then(value => { // 再次p1.then 这时已经为fulfilled状态 走的是fulfilled状态判断里的逻辑 所以我们也要确保判断里面onFuilled异步执行
    //         console.log(value); // 'resolve'
    //     });
    //     console.log('当前执行栈中同步代码');
    // })
    // console.log('全局执行栈中同步代码');
    //
    if (isResolved) {
        return (promise2 = new Q((resolve, reject) => {
            // 实践中要确保 onResolved 和 onRejected 方法异步执行，且应该在 then 方法被调用的那一轮事件循环之后的新执行栈中执行
            // PS: 事实上一般then函数中的resolve 和 reject方法应该在微任务队列中执行，这里简单用定时器宏任务来模拟这种异步行为
            setTimeout(() => {
                try {
                    let x = onResolved(self.final)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
        }))
    }

    if (isRejected) {
        return (promise2 = new Q((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onRejected(self.reason)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })
        }))
    }

    if (isPending) {
        return (promise2 = new Q((resolve, reject) => {
            self.onResolvedListeners.push(value => {
                try {
                    let x = onResolved(value)
                    resolvePromise(promise2, x, resolve, reject)
                } catch (e) {
                    reject(e)
                }
            })

            self.onRejectedListeners.push(r => {
                try {
                    let x = onRejected(r)
                    resolvePromise(promise2, x, resolve, reject)
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

    /**
     * resolve中的值几种情况：
     * 1.promise对象
     * 2.thenable对象/函数
     * 3.普通值
     */
    let called = false // 2.3.3.3.4.1 确保回调仅被调用一次
    if (isPromise(x)) {
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
Q.prototype.all = function(promises = []) {
    if (!promises.length) return Q.resolve([])
    return new Q((resolve, reject) => {
        let done = doneAllPromises(promises.length, resolve)
        promises.forEach((promise, idx) => {
            promise.then(value => {
                done(idx, value)
            }, reject)
        })
    })
}
Q.prototype.race = function(promises = []) {
    if (!promises.length) return Q.resolve()
    return new Q((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(resolve, reject)
        })
    })
}

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

function isPromise(maybeQ) {
    return maybeQ instanceof Q
}

function isFunction(v) {
    return typeof v === 'function'
}
// 不能是isPlainObject，因为Promise从obj.then如果出错，会reject
function isObject(obj) {
    return typeof obj === 'object'
}

function doneAllPromises(len, resolve) {
    let count = 0,
        values = Array(len).fill(undefined)

    return function(index, value) {
        count++
        values[index] = value
        if (count === len) {
            resolve(values)
        }
    }
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
 *
 * 在本项目中 `npm run test:promise`
 */
try {
    module.exports = Q
} catch (e) {}
