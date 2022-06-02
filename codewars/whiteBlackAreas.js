/**
 * Remember, board coloring starts with top left cell => WHITE
 * and then alternates with BLACK as in a usual chessboard.
 * @param {number[]} cols contains the N widths of the N columns of the chessboard
 * @param {number[]} rows contains the N heights of the N rows of the chessboard
 * @returns {number[]} a 2-element array, [totalWhiteArea, totalBlackArea]
 **/
function whiteBlackAreas(cols, rows) {
  `
  const totalArea = [0, 0]

  for (let i = 0; i < rows.length; i += 2) {
    for (let j = 0; j < cols.length; j += 2) {
      totalArea[0] += (rows[j] * cols[i])
    }

    for (let j = 1; j < cols.length; j += 2) {
      totalArea[1] += (rows[j] * cols[i])
    }
  }

  for (let i = 1; i < rows.length; i += 2) {
    for (let j = 0; j < cols.length; j += 2) {
      totalArea[1] += (rows[j] * cols[i])
    }

    for (let j = 1; j < cols.length; j += 2) {
      totalArea[0] += (rows[j] * cols[i])
    }
  }
  return totalArea
  `

}

console.log(whiteBlackAreas([3, 1, 2, 7, 1], [1, 8, 4, 5, 2]))
console.log(whiteBlackAreas([3, 1, 2, 7, 1, 11, 12, 3, 8, 1], [1, 8, 4, 5, 2, 21, 5, 2, 2, 17]))
console.log(whiteBlackAreas([3], [2]))
