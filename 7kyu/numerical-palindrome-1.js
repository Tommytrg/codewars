function palindrome(num) {
  if (num % 1 === 0 && typeof num === 'number' && num >= 0) {
    return num.toString().split('').map((item, index, array) => {
      return array[index] === array[array.length - index - 1];
    }).find(elem => {
      return elem === false;
    }) === undefined ? true : false;
  }else{
    return 'Not valid';
  }
}

console.log(palindrome('77'));
