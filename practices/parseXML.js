function parseXML(xmlString) {
    // 创建 DOMParser 对象
    const parser = new DOMParser()
    // 解析 XML 字符串并返回 XML 文档对象
    const xmlDoc = parser.parseFromString(
        xmlString.replace(/\t\n/g, ''),
        'text/xml'
    )
    // 返回 XML 文档对象
    return xmlDoc
}

function getChildResult(xmlDoc) {
    const result = []

    if (xmlDoc.childNodes) {
        const children = xmlDoc.childNodes
        if (children && children.length > 0) {
            for (let i = 0; i < children.length; i++) {
                const child = children[i]
                const resultItem = {}
                resultItem.tag = child.nodeName
                resultItem.attributes = child.attributes
                resultItem.children = child.children
                    ? Array.from(child.children).map(child =>
                          getChildResult(child)
                      )
                    : []
                resultItem.innerHTML = child.innerHTML

                result.push(resultItem)
            }
        }
    }

    return result
}

// 示例 XML 字符串
const xmlString = `
<note id="1234">
    <to>John</to>
    <from>Lucy</from>
    <body class="box">Hi,<span>John</span>,nice to meet you.</body>
</note>
`

// 解析 XML 字符串
const xmlDoc = parseXML(xmlString)

// 输出 XML 文档对象
console.log(xmlDoc)

console.log(getChildResult(xmlDoc))
