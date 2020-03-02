import func from '../dynamic-programming/5.longestPalindrome'

describe('two sum', () => {
    it('case 1', () => {
        const result = func('babad')
        expect(result).toEqual('bab')
    })

    it('case 1', () => {
        const result = func('abbeedeedbba')
        expect(result).toEqual('eedee')
    })

    it('case 1', () => {
        const result = func('a')
        expect(result).toEqual('a')
    })

    it('case 1', () => {
        const result = func('dgadvdddvdeelou')
        expect(result).toEqual('dvdddvd')
    })
})
