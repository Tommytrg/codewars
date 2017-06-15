
const isDead = (numberOfCellsAround) => {
  if (numberOfCellsAround === 3) return 1;
  return 0;
};

const isAlive = (numberOfCellsAround) => {
  if (numberOfCellsAround === 2 || numberOfCellsAround === 3) return 1;
  return 0;
};

const checkAround = (board, row, colm) => {
  let numberOfCellsAround = 0;
  const positions = [-1, 0, 1];
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (board[row + positions[i]][colm + positions[j]] === 1) numberOfCellsAround += 1;
    }
  }
  return board[row][colm] === 1 ? isAlive(numberOfCellsAround) : isDead(numberOfCellsAround);
};

const createNextGeneration = (cells) => {
  let nextGeneration = cells;
  for (let i = 0; i < cells.length; i += 1) {
    for (let j = 0; j < cells[i].length; j += 1) {
      nextGeneration[i][j] = checkAround(cells, i, j);
    }
  }
};

function getGeneration(cells, generations) {
  let actualBoard = cells;
  for (let i = 0; i < generations; i += 1) {
    actualBoard = createNextGeneration(cells);
  }
  return actualBoard;
}

