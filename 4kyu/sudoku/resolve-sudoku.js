const sudoku = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 1, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]];
//works
function checkRow(row) {
  for (let i = row.length - 1; i >= 0; i -= 1) {
    if (row.indexOf(row[i]) !== i) {
      return false;
    }
  }
  return true;
}
//works
function transposeArray(board) {
  return board[0].map((col, i) => board.map(row => row[i]));
}

function checkLines(board) {
  for (let i = 0; i < board.length; i += 1) {
    if (!checkRow(board[i]) || !checkRow(transposeArray(board)[i])) return false;
  }
  return true;
}

function getArrayDim3(board, firstCoordX, secondCoordX, firstCoordY, secondCoordY) {
  const arr = [[], [], []];
  for (let i = firstCoordX; i < secondCoordX; i += 1) {
    for (let j = firstCoordY; j < secondCoordY; j += 1) {
      arr[i][j] = board[i][j];
    }
  }
}

function get3x3From9x9(board) {
  const arrayOfArrays = [];
  arrayOfArrays.push(getArrayDim3(board, 0, 3, 0, 3));
  arrayOfArrays.push(getArrayDim3(board, 3, 6, 0, 3));
  arrayOfArrays.push(getArrayDim3(board, 6, 9, 0, 3));

  arrayOfArrays.push(getArrayDim3(board, 0, 3, 3, 6));
  arrayOfArrays.push(getArrayDim3(board, 3, 6, 3, 6));
  arrayOfArrays.push(getArrayDim3(board, 6, 9, 3, 6));

  arrayOfArrays.push(getArrayDim3(board, 0, 3, 6, 9));
  arrayOfArrays.push(getArrayDim3(board, 3, 6, 6, 9));
  arrayOfArrays.push(getArrayDim3(board, 6, 9, 6, 9));
  return arrayOfArrays;
}

function getPlainArray(matrix) {
  const playArray = [];
  for (let i = 0; i < 3; i += 3) {
    for (let j = 0; j < 3; j += 3) {
      playArray.push(matrix[i][j]);
    }
  }
}

function validate3x3(matrix) {
  if (!checkRow(getPlainArray[matrix])) return false;
  return true;
}

function check3x3(board) {
  const arr = get3x3From9x9(board);
  for (let i = 0; i < board.length; i += 1) {
    if (!validate3x3(arr[i])) return false;
  }
  return true;
}

function validSolution(board) {
  if (!checkLines(board) || !check3x3(board)) return false;
  return true;
}

const solution = validSolution(sudoku);
console.log(solution);
