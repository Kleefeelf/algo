var comparisons = 0;
var swaps = 0;

function merge(firstArray, secondArray, inputOrder) {
    let thirdArray = []

    switch(inputOrder) {
        case "asc":
            while (firstArray.length && secondArray.length != 0) {
                if (firstArray[0] > secondArray[0]) {
                    comparisons++;
                    thirdArray[thirdArray.length] = secondArray[0]
                    secondArray.shift()
                }
                else {
                    thirdArray[thirdArray.length] = firstArray[0]
                    firstArray.shift()
                }
            }
        case "desc":
            while (firstArray.length && secondArray.length != 0) {
                if (firstArray[0] < secondArray[0]) {
                    comparisons++;
                    thirdArray[thirdArray.length] = secondArray[0]
                    secondArray.shift()
                }
                else {
                    thirdArray[thirdArray.length] = firstArray[0]
                    firstArray.shift()
                }
            }
    }

   

    while (firstArray.length != 0) {
        thirdArray[thirdArray.length] = firstArray[0]
        firstArray.shift()
    }

    while (secondArray.length != 0) {
        thirdArray[thirdArray.length] = secondArray[0]
        secondArray.shift()
    }

    return thirdArray
}

const functions = {
    mergeSort(array, inputOrder) {
    if (array.length === 1) {
        comparisons++;
        return array
    }
    firstArray = array.splice(0, array.length/2)
    
    return merge(functions.mergeSort(firstArray, inputOrder), functions.mergeSort(array, inputOrder), inputOrder)
}
}

module.exports = functions;

