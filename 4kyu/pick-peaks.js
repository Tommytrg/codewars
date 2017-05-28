//Complete
function pickPeaks(arr) {
  const element = { pos: [], peaks: [] };
  let count = 0;
  if (arr.length === 0) return element;

  let desc = false;
  arr.reduce((first, second, index) => {
    if (first === second) {
      count += 1;
    }
    if (second < first && index !== 1 && index !== arr.length && !desc) {
      element.pos.push(index - 1 - count);
      element.peaks.push(first);
      desc = true;
    }
    if (second > first) desc = false;
    if (first !== second) count = 0;
    return second;
  });
  return element;
}
const a = pickPeaks([1, 2, 2, 2, 1]);

