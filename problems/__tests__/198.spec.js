import func from '../198.rob'

describe('70.climbStairs', () => {
    it('case 1', () => {
        const result = func([1, 2, 3, 1])
        expect(result).toEqual(4)
    })

    it('case 2', () => {
        const result = func([2, 7, 9, 3, 1])
        expect(result).toEqual(12)
    })
})
