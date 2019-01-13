const { isEmpty } = require('../dist/index.js')

console.assert(!isEmpty(' '), '一个空格')
console.assert(!isEmpty('string'), '字符串')
console.assert(!isEmpty(123), '数字123')
console.assert(!isEmpty(0), '数字0')
console.assert(!isEmpty(true), '布尔值true')
console.assert(!isEmpty(false), '布尔值false')
console.assert(!isEmpty(new Date()), 'Date')

console.assert(isEmpty(''), '空字符')
console.assert(isEmpty([]), '空数组')
console.assert(isEmpty({}), '空对象')
console.assert(isEmpty(new Map()), 'Map')
console.assert(isEmpty(new Set()), 'Set')
console.assert(isEmpty(null), 'null')
console.assert(isEmpty(undefined), 'undefined')

console.log('all pass')
