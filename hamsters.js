const scanf = require('scanf')

var dailyAmount = null
var hamNum = null
var sum = null
var hamsters = []
var hamstersGreed = []


class Hamster {
    constructor(dailyDose, greed) {
        this.dailyDose = dailyDose,
        this.greed = greed
    }
}

function input() {
    console.log("Денний запас ")
    dailyAmount = scanf('%d')
    console.log("Кількість хом'яків ")
    hamNum = scanf('%d')
    for(let i = 0; i < hamNum; i++) {
        var dose = null;
        var greed = null;
        console.log(`${i+1} hamster: `)
        var dose = scanf('%d')
        var greed = scanf('%d') 
        hamsters.push(new Hamster(dose, greed))
    }
    console.log(hamsters)
}


function summary(array) {
    sum = 0
    for(let i = 0; i < array.length; i++) {
        var greed = array[i].dailyDose + (array[i].greed * (array.length-1))
        hamstersGreed.push(greed)
        sum += (greed)
    }
    return sum
}

function buyHamsters() {
    summary(hamsters)
    if (dailyAmount >= sum ) {
        console.log(`Ви можете купити ${hamsters.length} хом'яків`)
        return hamsters.length
    }
    else {
        console.log("Не купляйте")
        var greediest = hamstersGreed.findIndex(element => element === Math.max(...hamstersGreed))
        hamsters.splice(greediest, 1)        
        return buyHamsters()
    }
}

input()
buyHamsters()