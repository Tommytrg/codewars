function sortByValueAndIndex(array) {
  return array.map((item, index) => {
    return [item, item * (index + 1)];
  }).sort((a, b) => {
    return a[1] > b[1] ? 1 : (a[1] < b[1] ? -1 : 0);git 

  }).map(num => {
    return num[0];
  });
}
