/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    return guessBetween(1, n)
}

function guessBetween(a, b) {
    const mid = Math.floor(a + b / 2)
    const result = guess(mid)

    if (result === -1) {
        return guessBetween(a, mid - 1)
    }

    if (result === 1) {
        return guessBetween(mid, b)
    }

    if (result === 0) {
        return mid
    }
}
