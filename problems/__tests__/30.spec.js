import { findSubstring } from '../30.substring-with-concatenation-of-all-words'

describe('30.substring-with-concatenation-of-all-words', () => {
    it('case 1', () => {
        let s = 'barfoothefoobarman'
        let words = ['foo', 'bar']
        expect(findSubstring(s, words)).toEqual([0, 9])
    })

    it('case 2', () => {
        let s = 'wordgoodgoodgoodbestword'
        let words = ['word', 'good', 'best', 'word']
        expect(findSubstring(s, words)).toEqual([])
    })
})
