const functions = require('./mergesort')

let array = [];
let input = process.argv.slice(2);
console.log(`input args: `, input);

const inputOrder = input[0];
const inputArray = input[1].split(`,`);


var comparisons = 0;
var swaps = 0;

let t0 = performance.now()
let result = functions.mergeSort(inputArray, inputOrder)
let t1 = performance.now()
console.log("Mergesort:  " + result);
console.log("Process time:  " + (t1-t0).toFixed(4));
console.log("Comparisons:  " + comparisons)
