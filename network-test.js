#!/usr/bin/env node

const https = require('https')
const { URL } = require('url')

const testUrl = 'https://raw.githubusercontent.com/wayne-kk/aigcode-ui-components/main/button.tsx'

console.log('🧪 测试网络连接...')
console.log(`🔗 测试 URL: ${testUrl}`)

const parsedUrl = new URL(testUrl)
console.log(`🔍 解析的 URL 信息:`)
console.log(`  - hostname: ${parsedUrl.hostname}`)
console.log(`  - pathname: ${parsedUrl.pathname}`)
console.log(`  - port: ${parsedUrl.port || 443}`)

const options = {
    hostname: parsedUrl.hostname,
    port: parsedUrl.port || 443,
    path: parsedUrl.pathname + parsedUrl.search,
    method: 'GET',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
}

const req = https.request(options, (response) => {
    console.log(`✅ 连接成功！状态码: ${response.statusCode}`)
    console.log(`📊 响应头:`)
    console.log(`  - Content-Type: ${response.headers['content-type']}`)
    console.log(`  - Content-Length: ${response.headers['content-length']}`)

    let data = ''
    response.on('data', (chunk) => {
        data += chunk
    })

    response.on('end', () => {
        console.log(`📝 文件内容预览 (前100字符):`)
        console.log(data.substring(0, 100) + '...')
    })
})

req.on('error', (err) => {
    console.error(`❌ 连接失败:`, err.message)
    console.error(`🔍 错误详情:`, err)
})

req.setTimeout(10000, () => {
    console.error('❌ 请求超时')
    req.abort()
})

req.end() 