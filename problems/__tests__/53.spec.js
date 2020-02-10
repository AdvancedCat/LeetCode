import func from '../53.maxSubArray'

describe('53.maxSubArray', () => {
    it('case 1', () => {
        const result = func([-2, 1, -3, 4, -1, 2, 1, -5, 4])
        expect(result).toEqual(6)
    })

    it('case 2', () => {
        const result = func([2, -1, 4])
        expect(result).toEqual(5)
    })
})
