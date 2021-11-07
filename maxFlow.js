let graph = [
    [0, 10, 10, 0, 0, 0],
    [0, 0, 0, 10, 0, 0],
    [0, 0, 0, 0, 15, 0],
    [0, 0, 0, 0, 0, 10],
    [0, 10, 0, 0, 0, 10],
    [0, 0, 0, 0, 0, 0]
]

let nodeAmount = 6

function Bfs(graph, s, t, path) {
    let visited = []
    for (let i =0; i < nodeAmount; i++) {
        visited[i] = false
    }
    let queue = []
    visited[s] = true
    queue.push(s)
    path[s] = -1
    while (queue.length != 0) {
        let current = queue.shift()
        for (let i = 0; i < nodeAmount; i++) {
            if (visited[i] == false && graph[current][i] > 0) {                
                if (i == t) {
                    path[i] = current
                    return true
                }
                queue.push(i)
                path[i] = current
                visited[i] = true        
            }
        }

    }
    return false
}

function fordFulk(graph, s, t) {
    let flow = 0
    let maxFlow = 0
    let residualGraph = new Array(nodeAmount)
    let path = new Array(nodeAmount)

    for(let i = 0; i < nodeAmount; i++) {
        residualGraph[i] = new Array(nodeAmount);
        for(let j = 0; j < nodeAmount; j++) {
            residualGraph[i][j] = graph[i][j];
        }
    }

    
    while(Bfs(residualGraph, s, t, path)) {
        for(let i = t; i != s; i = path[i]) {
            let current = path[i]

            flow = Math.min(residualGraph[current][i]) 
        }

        for (let i = t; i != s; i = path[i]) {
            let current = path[i]
            residualGraph[current][i] -= flow
            residualGraph[i][current] += flow
        }

        maxFlow += flow
    }
    return maxFlow
}

console.log(" " + fordFulk(graph, 0, 5))