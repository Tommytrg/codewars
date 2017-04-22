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
  let zeroCoords = lookForNumberCoords(initializedMap,0);
  console.log(zeroCoords)
}
//works
const initializeMap = (map) => {
  return map.split('\n').map(item => {
    return item.split(' ');
  });
};
//works
const lookForNumberCoords = (grid, number) => {
  let coords =
  grid.map((row,indexRow) =>{
    return row.map((item,indexCol)=>{ 
      if(parseInt(item) === number){
        return indexCol;
      }
    }).map((elem,indx) => {
      //indx === col index
      if(elem !== undefined){
        return [indx,indexRow]
      }
    }).filter(itm => {
      return itm !== undefined;
    });
  }).filter(arr => {
    return arr.length !== 0;
  });
  return [].concat.apply([], coords);
};


//console.log(lookForNumberCoords(initializeMap(map),0));

solveMine(map, 3);

module.exports = {
    initializeMap: initializeMap,
    lookForNumberCoords: lookForNumberCoords 
};

/*


const openAround0 = (map, x, y) => {
  return map.map((row, rowIndex) => {
    return row.map((item, colIndex) => {
      if (isNextTo0([rowIndex, colIndex], map)) {
        return open(item);
      } else {
        return item;
      }
    });
  });
};
//check if a pos has a 0 around and return true or false
//err
const isNextTo0 = (arr, map) => {
  around = [
    [1, 0],
    [1, -1],
    [1, 1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [0, -1]
  ];
  return around.map(item => {
    return map[item[0] + arr[0]][item[1] + arr[1]] === 0;
  }).find(elem => {
    return elem === true;
  }) === undefined ? false : true;
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
//works
const lookForNumberCoords = (map, number) => {
  map.map((array, indexRow) => {
    array.map((item, indexCol) => {
      if (map[indexRow][indexCol] === number) {
        coords.push([indexRow, indexCol]);
      }
    });
  });
  console.log('coords', coords);
  return coords;
};

*/
