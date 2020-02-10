import func from '../70.climbStairs'

describe('70.climbStairs', () => {
    it('case 1', () => {
        const result = func(3)
        expect(result).toEqual(3)
    })

    it('case 1', () => {
        const result = func(4)
        expect(result).toEqual(5)
    })

    it('case 1', () => {
        const result = func(5)
        expect(result).toEqual(8)
    })
})
