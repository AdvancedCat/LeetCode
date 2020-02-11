import func from '../62.uniquePaths'

describe('62.uniquePaths', () => {
    it('case 1', () => {
        const result = func(3, 2)
        expect(result).toEqual(3)
    })

    it('case 1', () => {
        const result = func(7, 3)
        expect(result).toEqual(28)
    })

    it('case 1', () => {
        const result = func(3, 7)
        expect(result).toEqual(28)
    })
})
