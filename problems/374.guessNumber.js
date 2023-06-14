var guessNumber = function(n) {
    let left = 1,
        right = n
    while (left < right) {
        // 循环直至区间左右端点相同
        const mid = Math.floor(left + (right - left) / 2)
        if (guess(mid) <= 0) {
            right = mid // 答案在区间 [left, mid] 中
        } else {
            left = mid + 1 // 答案在区间 [mid+1, right] 中
        }
    }
    // 此时有 left == right，区间缩为一个点，即为答案
    return left
}
