const fs = require('fs')

var w, h, exit, lines, data,
    topEnd, botEnd, matrix = []

var max = 0

function init() {
    data = fs.readFileSync('ijones.in', 'utf8')
    w = data[0]
    h = data[2]

    console.log('w = ' + w + ' h = ' + h)

    lines = data.split('\n')
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
    console.log(max)
}

function travel(hPos, wPos) {
    let current = matrix[hPos][wPos]
    let currentIDX = [hPos, wPos]
    let sameTiles = []

    for (let i = 0; i < h; i++) {
        for (let j = wPos + 1; j < w; j++) {
            
            if (current === matrix[i][j]) {
                sameTiles.push([i, j])
            }
        }
    }
    console.log(current, currentIDX, max)
    if (sameTiles.length === 0) {
        if (JSON.stringify(currentIDX) === JSON.stringify(topEnd) ||
            JSON.stringify(currentIDX) === JSON.stringify(botEnd)) {
            return max += 1
        }
        else if (wPos < w-1) {
            return travel(hPos, wPos + 1)
        }
        else {return}

        
    }

    sameTiles.forEach(tile => {
        currentIDX = tile
        i = tile[0]
        j = tile[1]

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



init()
fs.writeFile('ijones.out', `${max}`, function (err) { })