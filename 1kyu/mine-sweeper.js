/*jshint esversion:6*/
var map =
  `? ? ? ? ? ?
? ? ? ? ? ?
? ? ? 0 ? ?
? ? ? ? ? ?
? ? ? ? ? ?
0 0 0 ? ? ?`;

function solveMine(map, n) {

  let initializedMap = initializeMap(map);
  while (numberOfMinesFound(initializedMap) !== n) {
    while (lookForNumberCoords(initializedMap, 0) === []) {
      lookForNumberCoords(initializedMap, 0).map(item => {
        openAround0(initializedMap, item[1], item[0]);
      });
    }
  }
}
//not funcitional
const openAround0 = (map, x, y) => {
  if (initializeMap[x + 1][y] ==='?') {
    initializeMap[x + 1][y] = open(x + 1, y);
  }
  if (initializeMap[x + 1][y - 1] ==='?') {
    initializeMap[x + 1][y - 1] = open(x + 1, y - 1);
  }
  if (initializeMap[x + 1][y + 1] ==='?') {
    initializeMap[x + 1][y + 1] = open(x + 1, y + 1);
  }
  if (initializeMap[x - 1][y] ==='?') {
    initializeMap[x - 1][y] = open(x - 1, y);
  }
  if (initializeMap[x - 1][y + 1] ==='?') {
    initializeMap[x - 1][y + 1] = open(x - 1, y + 1);
  }
  if (initializeMap[x - 1][y - 1] ==='?') {
    initializeMap[x - 1][y - 1] = open(x - 1, y - 1);
  }
  if (initializeMap[x][y + 1] ==='?') {
    initializeMap[x][y + 1] = open(x, y + 1);
  }
  if (initializeMap[x][y - 1] ==='?') {
    initializeMap[x][y - 1] = open(x, y - 1);
  }
};

//works
const initializeMap = (map) => {
  return map.split('\n').map(item => {
    return item.split(' ');
  });
};
//works
const numberOfMinesFound = (map) => {
  return map.reduce((acc, arr) => {
    return acc + arr.reduce((sum, value) => {
      return value === 'x' ? sum + 1 : sum;
    }, 0);
  }, 0);
};
/*No functional*/
//works
const lookForNumberCoords = (map, number) => {
  let coords = [];
  map.map((array, indexRow) => {
    array.map((item, indexCol) => {
      if (map[indexRow][indexCol] === number) {
        coords.push([indexRow, indexCol]);
      }
    });
  });
  return coords;
};


console.log(lookForNumberCoords([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 9));
