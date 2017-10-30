function add(augend, addend) {
  let n1 = numberToArray(augend)
  let n2 = numberToArray(addend)
  if (n1.length < n2.length) {
    n1 = addZeros(n1, n2.length)
  } else {
    n2 = addZeros(n2, n1.length)
  }
  return calculateAdd(n1, n2)
}

function subtract(minuend, subtrahend) {
  // Rewrite this to support at least 100 digits
  var difference = Number(minuend) - Number(subtrahend);
  return String(difference);
}

function multiply(multiplicand, multiplier) {
  // Rewrite this to support at least 100 digits
  var product = Number(multiplicand) * Number(multiplier);
  return String(product);
}

function divide(dividend, divisor) {
  // Rewrite this to support at least 100 digits
  var quotient = Number(dividend) / Number(divisor);
  return String(quotient);
}


function numberToArray(n) {
  return n.toString().split('')
}

function addZeros(n, length) {
  while (n.length < length) n.unshift('0')
  return n
}

function calculateAdd(n1, n2) {
  let n1Reverse = n1.reverse()
  let n2Reverse = n2.reverse()
  let result = []
  let add = 0
  let aux = 0
  for (let i = 0; i < n1.length; i += 1) {
    add = Number(n1Reverse[i]) + Number(n2Reverse[i]) + aux
    result.push(add % 10)
    aux = add > 9 ? 1 : 0
  }
  if (aux) result.push(1)
  return result.reverse()
}