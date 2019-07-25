/**
 * 思路1： 暴力拆解法
 *
 * 算法复杂度： O(m * n)
 * 空间复杂度： O(n)
 * m为字符串长度 n为words数组长度
 */
export function findSubstring(source: string, words: string[]): number[] {
    if (!source || words.length === 0) return []

    let len = words.length
    let wordLen = words[0].length
    let sourceLength = source.length

    let groups: string[] = []
    let start = 0,
        result: number[] = []

    while (start * wordLen < sourceLength) {
        let t = source.substr(start * wordLen, wordLen)
        groups.push(t)
        start++
    }

    let flags = Array(len).fill(0)
    let bingos = 0,
        bingoIndex = 0
    for (let i = 0; i < groups.length; i++) {
        let item = groups[i]
        let index = -1

        for (let i = 0; i < len; i++) {
            if (words[i] === item && flags[i] === 0) {
                index = i
                break
            }
        }

        if (index < 0) {
            bingoIndex = (i + 1) * wordLen
            reset()
        } else if (flags[index] === 1) {
            bingoIndex = i * wordLen
            reset()
            i--
        } else {
            flags[index] = 1
            bingos++
            if (bingos === len) {
                result.push(bingoIndex)
                bingoIndex = (i + 1) * wordLen
                reset()
            }
        }
    }

    function reset() {
        flags = Array(len).fill(0)
        bingos = 0
    }

    return result
}

/**
 * 滑动窗口法
 * 运用HashMap
 */
