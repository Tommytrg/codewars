/*jshint esversion:6*/
function add(a, b) {
  let sum = "";
  let carry = 0;
  let partial;

  for (var i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    partial = carry;
    if (i >= 0) {
      partial += parseInt(a[i]);
    }
    if (j >= 0) {
      partial += parseInt(b[j]);
    }
    carry = 0;
    if (partial >= 10) {
      carry = 1;
      partial = partial - 10;
    }
    sum = partial.toString() + sum;
  }
  if (carry) {
    sum = '1' + sum;
  }
  return sum;
}
