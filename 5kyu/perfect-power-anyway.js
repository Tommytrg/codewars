/*jshint esversion:6*/
var isPP = function(n) {
  let operation = [];
  let pow = 0;
  let saved;
  for (let i = 2; i <= n/2; i++) {
    for (let j = 2; j <= n/2; j++) {
      saved = isSaved(i, j, operation);
      if (saved === -1) {
        pow = Math.pow(i, j);
        if (Math.pow(i, j)===n) {
          return [i, j];
        } else {
          operation.push([i, j, Math.pow(i, j)]);
        }
      } else { //is saved
        pow = saved;
        if (saved === n) {
          return [i, j];
        }
      }
    }
  }
  return null;
};

const isSaved = (i, j, arr) => {
  find = arr.find(item => {
    return item === [i, j];
  });
  return find===undefined? -1 : find;
};

console.log(isPP(484));
