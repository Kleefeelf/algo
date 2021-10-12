const { expect } = require('@jest/globals')
let Stack = require('./stack.js')
let Node = require('./stack.js')

var testStack = new Stack()
var testNode = new Node(4) 


testStack.printStack()
testStack.push(4)
testStack.push(testNode)
testStack.push(12)
console.log(testNode)

test('Stack push', () => {
    expect(testStack.push(4)).toBe(testStack.top)
})

test('Stack pop', () => {
    expect(testStack.top).toBe(testStack.pop())
})

test('Stack peek', () => {
    expect(testStack.peek()).toBe(testStack.top)
})

test('Stack search', () => {
    expect(testStack.search(testNode)).toBe(testNode)
})