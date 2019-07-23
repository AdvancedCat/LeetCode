import twoSum from '../1.two-sum'

describe('two sum', () => {
    it('case 1', () => {
        const result = twoSum([2, 7, 11, 15], 9)

        expect(result).toEqual([0, 1])
    })

    it('case 2', () => {
        const result = twoSum([3, 8, 12, 7], 10)

        expect(result).toEqual([0, 3])
    })
})
