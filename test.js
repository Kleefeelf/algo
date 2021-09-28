const functions = require('./mergesort')

const ASC = "asc"
const DESC = "desc"

var testArray = [ASC, "2,1,5,3,4"]
var testArrayS = [DESC, "2,1,5,3,4"]
var testArrayAsc = ["1,2,3,4,5"]
var testArrayDesc = ["5,4,3,2,1"]

test('Merge Sort sorts array asc', () => {
    expect(functions.mergeSort(testArray[1].split(`,`), testArray[0])).toEqual(testArrayAsc[0].split(`,`))
})

test('Merge Sort sorts array desc', () => {
    expect(functions.mergeSort(testArrayS[1].split(`,`), testArrayS[0])).toEqual(testArrayDesc[0].split(`,`))
})


test('Merge Sort sorts asc array asc', () => {
    expect(functions.mergeSort(testArrayAsc[0].split(`,`))).toEqual(testArrayAsc[0].split(`,`))
})


test('Merge Sort sorts desc array asc', () => {
    expect(functions.mergeSort(testArrayDesc[0].split(`,`), ASC)).toEqual(testArrayAsc[0].split(`,`))
})


test('Merge Sort sorts desc array desc', () => {
    expect(functions.mergeSort(testArrayDesc[0].split(`,`))).toEqual(testArrayDesc[0].split(`,`))
})