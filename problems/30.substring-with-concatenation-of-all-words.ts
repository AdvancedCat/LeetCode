export function findSubstring(source: string, words: string[]): number[] {
    console.log(source, words)

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
    console.log(flags)
    let bingos = 0,
        bingoIndex = 0
    for (let i = 0; i < groups.length; i++) {
        let item = groups[i]
        let index = words.indexOf(item)

        if (index < 0) {
            bingoIndex = (i + 1) * wordLen
            flags = Array(len).fill(0)
            bingos = 0
        } else if (flags[index] === 1) {
            bingoIndex = i * wordLen
            flags = Array(len).fill(0)
            bingos = 0
            i--
        } else {
            flags[index] = 1
            bingos++
            if (bingos === wordLen) {
                result.push(bingoIndex)
                bingoIndex = (i + 1) * wordLen
                flags = Array(len).fill(0)
                bingos = 0
            }
        }
    }

    return result
}
