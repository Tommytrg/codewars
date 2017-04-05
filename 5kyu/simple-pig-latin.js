/*jshint esversion:6*/
function pigIt(str) {
  return str.split(' ').map(word => {
    return word.split('').splice(1, word.split.length+3).join('') + word[0] + 'ay';
  }).join(' ');
}

console.log(pigIt('Pig latin is cool'));
