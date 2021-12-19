const { expect } = require('@jest/globals')
const buy = require('./hamsters')

var testDailyAmount = null
var testHamNum = null
var testSum = null
var testHamsters = []
var testHamstersGreed = []

test('should return 2', () => {
    expect(buy()).toEqual(2)
})

test('should return 3', () => {
    expect(buy()).toEqual(3)
})

test('should return 1', () => {
    expect(buy()).toEqual(1)
})
