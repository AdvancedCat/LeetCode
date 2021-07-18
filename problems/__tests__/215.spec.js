import findKthLargest from '../215.findKthLargest'

describe('two sum', () => {
    it('case 1', () => {
        const result = findKthLargest([3, 2, 1, 5, 6, 4], 2)

        expect(result).toEqual(5)
    })

    it('case 2', () => {
        const result = findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)

        expect(result).toEqual(4)
    })
})
