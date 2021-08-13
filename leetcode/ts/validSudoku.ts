// Решение https://youtu.be/MdGkzM3ERyM

function isValidSudoku(board: string[][]): boolean {
  let temp: string[] = [];

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let currChar = board[i][j];
      if (currChar === '.') continue;
      if (temp.includes(currChar)) return false;
      temp.push(currChar);
    }
    temp = [];
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let currChar = board[j][i];
      if (currChar === '.') continue;
      if (temp.includes(currChar)) return false;
      temp.push(currChar);
    }
    temp = [];
  }

  for (let b = 0; b < 9; b++) {
    for (let i = Math.floor(b / 3) * 3; i < Math.floor(b / 3) * 3 + 3; i++) {
      for (let j = b % 3 * 3; j < b % 3 * 3 + 3; j++) {
        let currChar = board[i][j];
        if (currChar === '.') continue;
        if (temp.includes(currChar)) return false;
        temp.push(currChar);
      }
    }
    temp = [];
  }

  return true;
};

isValidSudoku([
     ["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]);

isValidSudoku([
     ["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]])
