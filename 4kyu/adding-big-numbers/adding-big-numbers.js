/*jshint esversion:6*/

let convertStringToArray = (num) => {
    return num
        .split('')
        .map(digit => {
            return parseInt(digit);
        });
};

let sumTwoArrays = (a, b) => {
    let sum = [];
    let aux = 0;
    let maxLength = a;

    maxLength = a.length > b.length ? a : b;

    let num1 = maxLength.map(digit, index => {
      return a[index] === undefined ? 0 : a[index];
    });
    return a[index] === undefined ? 0 : a[index];
  });


    for (let i = max.length - 1; i >= 0; i--) {
      console.log('A: ',a)
      console.log('B: ',b)
      console.log(sum)
        if (num1[i - 1] !== undefined && num2[i - 1] !== undefined) {
            sum.push(aux + num1[i - 1] + num2[i - 1] % 10);
            if (aux + num1[i - 1] + num2[i - 1] > 9) {
                aux = 1;
            } else {
                aux = 0;
            }
        } else {
            if (num1[i - 1] === undefined) {
                sum.push(num2[i]);
            } else {
                if (num2[i - 1] === undefined) {
                    sum.push(num1[i]);
                }
            }
        }
    }
    return sum.join('');

};

function add(a, b) {
    return sumTwoArrays(convertStringToArray(a), convertStringToArray(b));
}
console.log(add('1', '1'));
