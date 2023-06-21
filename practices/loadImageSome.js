const urls = [
    'https://m15.360buyimg.com/mobilecms/jfs/t1/187640/12/30456/5256/639c2315Ebc95c142/350a8f0c766f5460.png',
    'https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png',
    'https://m15.360buyimg.com/mobilecms/jfs/t1/54043/33/19389/4660/62b049dbE3b9aef75/2fcd31afd5d702e4.png',
    'https://m15.360buyimg.com/mobilecms/jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png',
    'https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png',
    'https://m15.360buyimg.com/mobilecms/jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png',
    'https://m15.360buyimg.com/mobilecms/jfs/t1/34248/39/16616/4689/62bbbdccE9f11132e/d51caf15f2f412b2.png',
    'https://m15.360buyimg.com/mobilecms/jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png',
    'https://m15.360buyimg.com/mobilecms/jfs/t1/191060/24/12861/6818/60ec11f2E67cf5ee6/c264378678b3cd96.png',
    'https://m15.360buyimg.com/mobilecms/jfs/t1/186882/8/12149/5894/60ec1250E9335241a/b22054613aa8ae75.png',
]
// 实现如下三个异步函数

async function loadImage(url) {
    if (!url) return Promise.reject('url is required')

    return fetch(url)
        .then(res => res.blob())
        .then(() => {
            return `load ${url} success`
        })
}

// 图片按序依次加载
async function loadImageSequence(urls) {
    const results = []
    for (let url of urls) {
        const result = await loadImage(url)
        results.push(result)
    }

    return results
}

// 图片以groupSize为一组，按序按组加载。组内可并行。
async function loadImageByGroup(urls, groupSize) {
    const urlGroup = []
    for (let i = 0; i < urls.length; i += groupSize) {
        urlGroup.push(urls.slice(i, i + groupSize))
    }

    const results = []
    for (let group of urlGroup) {
        const result = await Promise.all(group.map(url => loadImage(url)))
        results.push(...result)
    }

    return results
}

// 图片以 concurrency 阻塞加载。如concurrency=2，则同时允许最多两个图片加载，直到所有图片加载完成
async function loadImageConcurrency(urls, concurrency) {
    let cur = 0
    const results = []

    async function loadNext() {
        if (cur >= urls.length) return ''
        console.log('开始第' + cur + '个任务')
        const result = await loadImage(urls[cur++])
        results.push(result)
        return loadNext()
    }

    await Promise.all(
        Array(concurrency)
            .fill(0)
            .map(() => {
                return loadNext()
            })
    )

    return results
}
