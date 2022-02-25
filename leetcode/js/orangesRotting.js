import { Queue } from './Queue/index.js'

/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
    let q = new Queue()
    let freshOranges = 0

    let rows = grid.length
    let cols = grid[0].length

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let curr = grid[i][j]

            if (curr === 2) {
                q.enqueue([i, j])
            } else if (curr === 1) {
                freshOranges++
            }
        }
    }

    q.enqueue([-1, -1])
    let minutes = -1
    let dir = [
        [-1, 0],
        [0, 1],
        [1, 0],
        [0, -1],
    ]

    while (!q.isEmpty()) {}
}

console.log(
    orangesRotting([
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
    ])
)
console.log(
    orangesRotting([
        [2, 1, 1],
        [0, 1, 1],
        [1, 0, 1],
    ])
)
console.log(orangesRotting([[0, 2]]))
