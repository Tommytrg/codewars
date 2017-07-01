const board = [
  ['-', '-', '-', '-', '-', '-', '-'],
['-', '-', '-', '-', '-', '-', '-'],
['Y', '-', '-', '-', '-', '-', '-'],
['R', 'Y', '-', '-', '-', '-', '-'],
['R', 'R', 'Y', '-', '-', '-', '-'],
['R', 'Y', 'R', 'Y', '-', '-', '-']];

// const board = [
//              ['7', '6', '5', '4', '3', '2', '1'],
//              ['8', '7', '6', '5', '4', '3', '2'],
//              ['9', '8', '7', '6', '5', '4', '3'],
//              ['10', '9', '8', '7', '6', '5', '4'],
//              ['11', '10', '9', '8', '7', '6', '5'],
//              ['12', '11', '10', '9', '8', '7', '6']];

const transposeMatrix = array => array[0].map((col, i) => array.map(row => row[i]));

const getDiagonalsLeft = (matrix) => {
  const lines = [];
  let line = [];

  let row = 0;
  let col;
  // first half
  while (row < matrix.length) {
    line = [];
    col = 0;
    let rowAux = row;
    while (rowAux >= 0) {
      line.push(matrix[rowAux][col]);
      rowAux -= 1;
      col += 1;
    }
    lines.push(line);
    row += 1;
  }
// second half
  col = 1;
  while (col <= matrix.length) {
    line = [];
    let colAux = col;
    row = matrix.length - 1;
    while (colAux <= matrix.length) {
      line.push(matrix[row][colAux]);
      row -= 1;
      colAux += 1;
    }
    lines.push(line);
    col += 1;
  }
  return lines;
};

const getDiagonalsRight = (matrix) => {
  const lines = [];
  let line = [];

  let row = 0;
  let col;
  while (row < matrix.length) {
    line = [];
    col = matrix[0].length - 1;
    let rowAux = row;
    while (rowAux >= 0) {
      line.push(matrix[rowAux][col]);
      rowAux -= 1;
      col -= 1;
    }
    lines.push(line);
    row += 1;
  }

  col = matrix.length - 1;
  while (col >= 0) {
    line = [];
    let colAux = col;
    row = matrix.length - 1;
    while (colAux >= 0) {
      line.push(matrix[row][colAux]);
      row -= 1;
      colAux -= 1;
    }
    lines.push(line);
    col -= 1;
  }
  return lines;
};

const checkLine = (line) => {
  console.log('line', line);
  if (line.length > 3) {
    for (let i = 0; i < line.length - 3; i += 1) {
      if (line[i] === 'R' && line[i + 1] === 'R' && line[i + 2] === 'R' && line[i + 3] === 'R') return 'R';
      if (line[i] === 'Y' && line[i + 1] === 'Y' && line[i + 2] === 'Y' && line[i + 3] === 'Y') return 'Y';
    }
  }
  return 'in progress';
};


function connectFour(matrix) {
  const vertically = transposeMatrix(matrix);
  const diagonalsLeft = getDiagonalsLeft(matrix);
  const diagonalsRight = getDiagonalsRight(matrix);

  const lines = [matrix, vertically, diagonalsLeft, diagonalsRight];
  return lines.reduce((ant, act) => {
    if (ant === 'R' || ant === 'Y') return ant;
    return act.reduce((vie, nuev) => {
      if (vie === 'R' || vie === 'Y') return vie;
      return checkLine(nuev);
    }, '');
  }, '');
}

const result = connectFour(board);
console.log(result);
