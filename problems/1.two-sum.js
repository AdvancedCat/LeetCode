/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const dic = {}

    nums.forEach((num, idx) => {
        if (!dic['' + num]) {
            dic['' + num] = idx
        }
    })

    for (let i = 0; i < nums.length; i++) {
        let v = '' + (target - nums[i])
        if (dic[v]) {
            return [i, dic[v]]
        }
    }

    return []
}

export default twoSum
