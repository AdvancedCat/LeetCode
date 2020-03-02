import func from '../64.minPathSum'

describe('64.minPathSum', () => {
    it('case 1', () => {
        const result = func([[1, 3, 1], [1, 5, 1], [4, 2, 1]])
        expect(result).toEqual(7)
    })

    it('case 1', () => {
        const result = func([[1, 3, 1], [1, 5, 1], [4, 2, 1], [4, 6, 2]])
        expect(result).toEqual(9)
    })

    it('case 1', () => {
        const result = func([[1, 3, 1]])
        expect(result).toEqual(5)
    })
})
