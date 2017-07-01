function LCS(x, y) {
  const subsequencesX = getSubSequences(x);
  const subsequencesY = getSubSequences(y);
}

function getSubSequences(array) {
  const subsequences = [];
  for (let j = 0; j < array.length; j += 1) {
    for (let i = j; i < array.length; i += 1) {
      let array1 = array[i] ? array[i] : '';
      let array2 = array[i+1] ? array[i + 1] : '';
      let array3 = array[i+2] ? array[i + 2] : '';
      subsequences.push(array1.concat(array2).concat(array3));
    }
  }
  return subsequences;
}

const x = getSubSequences('abcde', 'abc');
console.log(x);

