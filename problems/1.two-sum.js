/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const dic = {}

    nums.forEach((value, idx) => {
        let key = '' + value
        if (!(key in dic)) {
            dic[key] = [idx]
        } else {
            dic[key].push(idx)
        }
    })

    for (let i = 0; i < nums.length; i++) {
        let v = '' + (target - nums[i])

        if (dic[v]) {
            let tempArr = dic[v]
            if (tempArr.length === 1) {
                if (tempArr[0] !== i) {
                    return i > tempArr[0] ? [tempArr[0], i] : [i, tempArr[0]]
                }
            } else {
                let t = tempArr.findIndex(item => item != i)
                let m = dic[v][t]
                return i > m ? [m, i] : [i, m]
            }
        }
    }

    return []
}

export default twoSum
