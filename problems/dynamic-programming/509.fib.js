/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n <= 0) return 0
    if (n === 1) return 1

    let prev = 0,
        priot = 1,
        result = null
    for (let i = 2; i <= n; i++) {
        result = prev + priot
        prev = priot
        priot = result
    }

    return result
}

export default fib

/**
泰波那契序列 Tn 定义如下： 

T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

给你整数 n，请返回第 n 个泰波那契数 Tn 的值。
 */
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n <= 0) return 0
    if (n <= 2) return 1

    let one = 0,
        two = 1,
        three = 1

    for (let i = 3; i <= n; i++) {
        result = one + two + three
        one = two
        two = three
        three = result
    }

    return result
}
