function tictactoe(moves: number[][]): string {
  let rowSum = Array.from({ length: 3 }, () => 0);
  let colSum = Array.from({ length: 3 }, () => 0);
  let ltcDiag = 0; // left top corner
  let rtcDiag = 0; // right top corner
  let turn = 0;

  for (let [r, c] of moves) {
    if (turn % 2 === 0) {
      rowSum[r]++;
      colSum[c]++;
      if (r === c) ltcDiag++;
      if (r === 2 - c) rtcDiag++;
    } else {
      rowSum[r]--;
      colSum[c]--;
      if (r === c) ltcDiag--;
      if (r === 2 - c) rtcDiag--;
    }
    turn++;
  }

  if (
    rowSum.includes(3) ||
    colSum.includes(3) ||
    ltcDiag === 3 ||
    rtcDiag === 3
  )
    return "A";
  else if (
    rowSum.includes(-3) ||
    colSum.includes(-3) ||
    ltcDiag === -3 ||
    rtcDiag === -3
  )
    return "B";
  if (moves.length < 9) return "Pending";
  return "Draw";
}

console.log(
  tictactoe([
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ])
);

console.log(
  tictactoe([
    [0, 0],
    [1, 1],
    [0, 1],
    [0, 2],
    [1, 0],
    [2, 0],
  ])
);

console.log(
  tictactoe([
    [0, 0],
    [1, 1],
    [2, 0],
    [1, 0],
    [1, 2],
    [2, 1],
    [0, 1],
    [0, 2],
    [2, 2],
  ])
);

console.log(
  tictactoe([
    [0, 0],
    [1, 1],
  ])
);
