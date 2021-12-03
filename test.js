const { test, expect } = require("@jest/globals")
var kmp = require("./kmp")


var TestString = "ABC DEF ABB BBA ABCABC"
var TestPiArray = [0]

var testPatternOne = "ABC"
var testPatternTwo = "DEF"
var testPatternThree = "']"
var testPatternFour = ""
var testPatternFive = ""
var testPatternSix = ""
var testPatternSeven = ""
var testPatternEight = ""
var testPatternNine = ""
var testPatternTen = ""

test('Should return 0 16 19', () => {
    expect(kmp(TestString, testPatternOne, TestPiArray)).toStrictEqual([0, 16, 19])
})

test('Should return 4', () => {
    expect(kmp(TestString, testPatternTwo, TestPiArray)).toStrictEqual([4])
})

test('Should return []', () => {
    expect(kmp(TestString, testPatternThree, TestPiArray)).toStrictEqual("pattern not found")
})