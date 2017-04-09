function noSpace(x) {
  return x.split('').filter(char => {
    return char !== ' ';
  }).join('');
}

console.log(noSpace('Hola Mundo'));
