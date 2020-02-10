/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    if (!arr || arr.length <= 1) return false
    const len = arr.length

    const hashMap = {}
    for (let i = 0; i < len; i++) {
        const val = arr[i]

        if (val === 0 && val in hashMap) return true

        hashMap[val] = i

        const double = 2 * val
        const half = val % 2 === 0 ? val / 2 : null
        if (double in hashMap || (half !== null && half in hashMap)) {
            let idx = hashMap[double] || hashMap[half]
            if (idx !== i) return true
        }
    }

    return false
}

export default checkIfExist
