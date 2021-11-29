const fs = require('fs')
//import fs from 'fs'

var w, h, notSame, lines, data, max,
    topEnd, botEnd, matrix = []

data = fs.readFileSync('ijones.in', 'utf8')


function init(data) {
    max = 0
    lines = data.split('\n')

    w = lines[0].split(' ')[0]
    h = lines[0].split(' ')[1]

    lines.splice(0, 1)
    for (let i = 0; i < h; i++) {
        matrix[i] = []
        for (let j = 0; j < w; j++) {
            matrix[i][j] = lines[i][j]
        }
    }
    topEnd = [0, Number(w - 1)]
    botEnd = [Number(h - 1), Number(w - 1)]

    for (let i = 0; i < h; i++) {
        travel(i, 0)
    }
    return max
}

function travel(hPos, wPos) {
    let current = matrix[hPos][wPos]
    let currentIDX = [hPos, wPos]
    let sameTiles = []
    notSame = false;
    for (let i = 0; i < h; i++) {
        for (let j = wPos + 1; j < w; j++) {
            if (current === matrix[i][j]) {
                sameTiles.push([i, j])
            }
        }
    }
    
    if (current != matrix[hPos][wPos+1] && wPos < w-1) {
        travel(hPos, wPos+1)
    }
    
    //console.log(current, currentIDX, max)
    if (sameTiles.length === 0) {
        if (JSON.stringify(currentIDX) === JSON.stringify(topEnd) ||
            JSON.stringify(currentIDX) === JSON.stringify(botEnd)) {
            return max += 1
        }        
        else { return }
    }

    sameTiles.forEach(tile => {
        currentIDX = tile
        let i = tile[0]
        let j = tile[1]

        for (; i < h; i++) {
            for (; j < w; j++) {
                current = matrix[i][j]
                currentIDX = [i, j]
                //console.log(current + " " + currentIDX)
                if (JSON.stringify(currentIDX) === JSON.stringify(topEnd) ||
                    JSON.stringify(currentIDX) === JSON.stringify(botEnd)) {
                    return max += 1
                }
                return travel(i, j)
            }
        }
        
    })
    return max
}
//console.log(init(data))
fs.writeFile('ijones.out', `${max}`, function (err) { })
module.exports = init