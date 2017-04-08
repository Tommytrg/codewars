/*jshint esversion:6*/
function sum(num) {
  let counter = [];
  while (arraySum(counter) < num) {
    counter.add(1);
  }
}
//works
const arraySum = (arr) => {
  return arr.reduce((acc, item) => {
    return acc + item;
  }, 0);
};
