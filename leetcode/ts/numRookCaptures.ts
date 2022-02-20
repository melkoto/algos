function numRookCaptures(board: string[][]): number {
  let res = 0,
    rookX = 0,
    rookY = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "R") {
        rookX = i;
        rookY = j;
        break;
      }
    }
  }

  return find(board, rookX, rookY, res);
}

function find(arr: string[][], i: number, j: number, res: number): number {
  if (typeof arr[i][j - 1] !== "undefined") {
    let left = j;
    while (left >= 0) {
      if (arr[i][left - 1] === "B") break;
      else if (arr[i][left - 1] === "p") {
        res++;
        break;
      }
      left--;
    }
  }

  if (typeof arr[i][j + 1] !== "undefined") {
    let right = j;
    while (right < arr[i].length) {
      if (arr[i][right + 1] === "B") break;
      else if (arr[i][right + 1] === "p") {
        res++;
        break;
      }
      right++;
    }
  }

  if (typeof arr[i - 1] && arr[i - 1][j] !== "undefined") {
    let top = i;
    while (top >= 0 && arr[top - 1]) {
      if (arr[top - 1][j] === "B") break;
      else if (arr[top - 1][j] === "p") {
        res++;
        break;
      }
      top--;
    }
  }

  if (typeof arr[i + 1] && arr[i + 1][j] !== "undefined") {
    let bottom = i;
    while (bottom < arr[i].length && arr[bottom + 1]) {
      if (arr[bottom + 1][j] === "B") break;
      else if (arr[bottom + 1][j] === "p") {
        res++;
        break;
      }
      bottom++;
    }
  }
  return res;
}

console.log(
  numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "R", ".", ".", ".", "p"],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
);

console.log(
  numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", "p", "p", "p", "p", "p", ".", "."],
    [".", "p", "p", "B", "p", "p", ".", "."],
    [".", "p", "B", "R", "B", "p", ".", "."],
    [".", "p", "p", "B", "p", "p", ".", "."],
    [".", "p", "p", "p", "p", "p", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
);

console.log(
  numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    ["p", "p", ".", "R", ".", "p", "B", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "B", ".", ".", ".", "."],
    [".", ".", ".", "p", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
);

console.log(
  numRookCaptures([
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "R", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", "."],
  ])
);
