/**
给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

 

示例 1：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
示例 2：

输入：nums = [0,1]
输出：[[0,1],[1,0]]
示例 3：

输入：nums = [1]
输出：[[1]]
 

提示：

1 <= nums.length <= 6
-10 <= nums[i] <= 10
nums 中的所有整数 互不相同

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const len = nums.length
    if (!len) return []
    const hashMap = {
        1: nums.map(num => [num]),
    }

    for (let i = 2; i <= len; i++) {
        genByCount(nums, i, hashMap)
    }

    return hashMap[len]
}

function genByCount(nums, count, hashMap) {
    const result = []

    const lists = hashMap[count - 1]
    nums.forEach(num => {
        lists.forEach(list => {
            if (
                !list.some(item => {
                    return item <= num
                })
            ) {
                result.push([num, ...list])
                for (let j = 1; j < list.length; j++) {
                    result.push([...list.slice(0, j), num, ...list.slice(j)])
                }
                result.push([...list, num])
            }
        })
    })

    hashMap[count] = result
}
