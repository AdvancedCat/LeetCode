import func from '../1346.checkIfExist'

describe('1346.checkIfExist', () => {
    it('case 1', () => {
        const result = func([10, 2, 5, 3])
        expect(result).toEqual(true)
    })

    it('case 2', () => {
        const result = func([7, 1, 14, 11])
        expect(result).toEqual(true)
    })

    it('case 3', () => {
        const result = func([3, 1, 7, 11])
        expect(result).toEqual(false)
    })

    it('case 4', () => {
        const result = func([-2, 0, 10, -19, 4, 6, -8])
        expect(result).toEqual(false)
    })

    it('case 4', () => {
        const result = func([0, 0])
        expect(result).toEqual(true)
    })
})
