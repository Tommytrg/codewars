/*jshint esversion:6*/
function isValidIP(str) {
  return /^((2(5[0-5]|[0-4]\d)|(1?\d{0,2}))\.){3}(2(5[0-5]|[0-4]\d)|(1?\d{0,2}))$/.test(str);
}
console.log(isValidIP('2.1.55.3'));
