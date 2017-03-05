function namesSorter (departmentsArray) {
  return sort(
    concat(departmentsArray),
    byLengthAndAlphabetically
  );
}

function concat(xs) { return xs.reduce(concat2, []); }

function concat2(a, b) { return a.concat(b); }

function byLengthAndAlphabetically(x, y) {
  var xl = x.length;
  var yl = y.length;
  if (xl == yl)
    return x.localeCompare(y);
  else
    return xl - yl;
}

function sort(xs, comparator) {
  return xs.sort(byLengthAndAlphabetically);
}
