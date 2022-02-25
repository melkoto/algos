import { Queue } from './Queue/index.js'

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let dist = Array.from({ length: mat.length }, () =>
        Array.from({ length: mat[0].length }, () => -1)
    )
    let row = mat.length
    let col = mat[0].length
    let q = new Queue()

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (mat[i][j] === 0) {
                dist[i][j] = 0
                q.enqueue([i, j])
            }
        }
    }

    let dir = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ]

    while (!q.isEmpty()) {
        let curr = q.front()
        q.dequeue()

        for (let i = 0; i < 4; i++) {
            let newRow = curr[0] + dir[i][0]
            let newCol = curr[1] + dir[i][1]

            if (
                newRow >= 0 &&
                newCol >= 0 &&
                newRow < row &&
                newCol < col &&
                dist[newRow][newCol] < 0
            ) {
                dist[newRow][newCol] = dist[curr[0]][curr[1]] + 1
                q.enqueue([newRow, newCol])
            }
        }
    }
    return dist
}

console.log(
    updateMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
    ])
) // [[0,0,0],[0,1,0],[1,2,1]]
console.log(
    updateMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ])
) // [[0,0,0],[0,1,0],[0,0,0]]
