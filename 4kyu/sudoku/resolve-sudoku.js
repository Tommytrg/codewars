/*jshint esversion:6*/
function validSolution(board) {
    return checkZero(board) && checkLines(board);
}

let transposingArray = (board) => {
    return board[0].map(function(col, i) {
        return board.map(function(row) {
            return row[i];
        });
    });
};
//works
let checkZero = (board) => {
    let rowsThatHaveZero = board.filter(row => {
        return row.indexOf(0) !== -1;
    });
    if(rowsThatHaveZero.length !== 0)
      console.log(hola);
    return rowsThatHaveZero.length === 0;
};

//Works
let checkLines = (board) => {
    let row = board.filter((row) => {
        return rowIsValid(row);
    });
    let col = transposingArray(board).filter((row) => {
        return rowIsValid(row);
    });
    return row === 0 && col === 0;
};

//works
let rowIsValid = (row) => {
    let sumOfNumbers = row.map(item => {
        return 0;
    });
    row.map((item) => {
        sumOfNumbers[item - 1]++;
    });
    let result = sumOfNumbers
        .filter(item => {
            return item !== 1;
        })
        .length;
    return result === 0;
};
//toTest
let getArrayDim3 = (board,firstCoordX, secondCoordX, firstCoordY, secondCoordY ) => {
  let arraysOfDim3 = board.filter(row, rowIndex => {
    row.filter(col, colIndex => {
      if(colIndex > firstCoordX && colIndex < secondCoordX && rowIndex > firstCoordY && rowIndex < secondCoordY){
        return board[rowIndex][colIndex];
      }
    });
  });
};

let get9ArraysOf3 = (board) => {
  let arrayOfArrays = [];
  arrayOfArrays.push(getArrayDim3(board, 0,3,0,3));
  arrayOfArrays.push(getArrayDim3(board, 3,6,0,3));
  arrayOfArrays.push(getArrayDim3(board, 6,9,0,3));

  arrayOfArrays.push(getArrayDim3(board, 0,3,3,6));
  arrayOfArrays.push(getArrayDim3(board, 3,6,3,6));
  arrayOfArrays.push(getArrayDim3(board, 6,9,3,6));

  arrayOfArrays.push(getArrayDim3(board, 0,3,6,9));
  arrayOfArrays.push(getArrayDim3(board, 3,6,6,9));
  arrayOfArrays.push(getArrayDim3(board, 6,9,6,9));





};

const sudoku = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 1, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

console.log(checkLines(sudoku));
