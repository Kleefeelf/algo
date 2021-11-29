const init = require('./travel.js')

var dataTestOne = "1 3\na\nb\nc"
var dataTestTwo = "3 3\naaa\ncab\ndef"
var dataTestThree = "7 6\naaaaaaa\naaaaaaa\naaaaaaa\naaaaaaa\naaaaaaa\naaaaaaa"
var dataTestFour = "10 1\nabcdefaghi"
var dataTestFive = "3 3\nabc\naaa\nahc"
var dataTestSix = "3 3\naab\nbba\naab"
var dataTestSeven = ""
var dataTestEight = ""
var dataTestNine = ""
var dataTestTen = ""
var dataTestEleven = ""
var dataTestTwelve = ""
var dataTestThirteen = ""
var dataTestFourteen = "0 0\n"
var dataTestFiveteen = "1 1\na"

test('Must return 2', () => {x
    expect(init(dataTestOne)).toBe(2);
})

test('Must return 5', () => {
    expect(init(dataTestTwo)).toBe(5);
})

test('Must return 201684', () => {
    expect(init(dataTestThree)).toBe(201684);
})

test('Must return 2', () => {
    expect(init(dataTestFour)).toBe(2);
})

test('Must return 2', () => {
    expect(init(dataTestFive)).toBe(2);
})

test('Must return 8', () => {
    expect(init(dataTestSix)).toBe(8);
})

test('Must return 0', () => {
    expect(init(dataTestFourteen)).toBe(0);
})

test('Must return 1', () => {
    expect(init(dataTestFiveteen)).toBe(1);
})
