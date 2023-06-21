/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const group = haystack.split(needle)
    if (group.length === 1) return -1

    return group[0].length
}
