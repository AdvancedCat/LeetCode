/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(a, b) {
    const isFirstLonger = a.length > b.length
    const minLen = Math.min(a.length, b.length)

    for (let i = minLen; i > 0; i--) {
        const gcd = isFirstLonger ? b.slice(0, i) : a.slice(0, i)
        const aResult = a.split(gcd).join('')
        const bResult = b.split(gcd).join('')

        if (aResult === '' && bResult === '') {
            return gcd
        }
    }

    return ''
}

/**
 var gcdOfStrings = function(str1, str2) {
  if (str1 + str2 !== str2 + str1) return ''
  const gcd = (a, b) => (0 === b ? a : gcd(b, a % b))
  return str1.substring(0, gcd(str1.length, str2.length))
};

 */
