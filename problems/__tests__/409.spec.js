import fn from '../409.longestPalindrome'

describe('longestPalidrome', () => {
    it('case 1', () => {
        const result = fn('a')
        expect(result).toEqual(1)
    })

    it('case 1', () => {
        const result = fn('abccccdd')
        expect(result).toEqual(7)
    })

    it('case 1', () => {
        const result = fn('aaaaaccc')
        expect(result).toEqual(7)
    })
})
