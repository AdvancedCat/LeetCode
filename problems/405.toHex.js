/**
 * 给定一个整数，编写一个算法将这个数转换为十六进制数。对于负整数，我们通常使用 补码运算 方法。

注意:

十六进制中所有字母(a-f)都必须是小写。
十六进制字符串中不能包含多余的前导零。如果要转化的数为0，那么以单个字符'0'来表示；对于其他情况，十六进制字符串中的第一个字符将不会是0字符。 
给定的数确保在32位有符号整数范围内。
不能使用任何由库提供的将数字直接转换或格式化为十六进制的方法。
示例 1：

输入:
26

输出:
"1a"
示例 2：

输入:
-1

输出:
"ffffffff"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/convert-a-number-to-hexadecimal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

const hexMap = {
    '0000': '0',
    '0001': '1',
    '0010': '2',
    '0011': '3',
    '0100': '4',
    '0101': '5',
    '0110': '6',
    '0111': '7',
    '1000': '8',
    '1001': '9',
    '1010': 'a',
    '1011': 'b',
    '1100': 'c',
    '1101': 'd',
    '1110': 'e',
    '1111': 'f',
}

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num === 0) return '0'

    const isNegative = num < 0
    const binarys = toBinaryList(Math.abs(num))
    let fullArr = Array.from({ length: 32 - binarys.length }, _ => '0').concat(
        binarys
    )
    if (isNegative) {
        fullArr = getBuma(fullArr)
        fullArr[0] = '1'
    } else {
        fullArr[0] = '0'
    }

    let hex = '',
        flag = true
    for (let i = 0; i < fullArr.length; i += 4) {
        const key = fullArr.slice(i, i + 4).join('')
        let h = hexMap[key]
        if (h === '0' && flag) {
            continue
        } else {
            hex += h
            flag = false
        }
    }
    return hex
}

function toBinaryList(positiveNum) {
    if (positiveNum === 0) return ['0']
    let temp = positiveNum,
        result = []
    while (temp > 1) {
        let rest = temp % 2
        temp = (temp - rest) / 2
        result.unshift(rest ? '1' : '0')
    }
    result.unshift('1')
    return result
}

function getBuma(binarys) {
    const newBinarys = binarys.map(item => {
        return item === '0' ? '1' : '0'
    })

    if (newBinarys[newBinarys.length - 1] === '1') {
        newBinarys[newBinarys.length - 1] = '0'
        let carry = true
        for (let i = newBinarys.length - 2; i >= 0; i--) {
            let item = newBinarys[i]
            if (item === '0') {
                if (carry) {
                    newBinarys[i] = '1'
                }
                break
            } else {
                newBinarys[i] = '0'
            }
        }
    } else {
        newBinarys[newBinarys.length - 1] = '1'
    }

    return newBinarys
}
