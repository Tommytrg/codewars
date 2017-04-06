/*jshint esversion:6*/
/*function validate(password) {
  return /(put answer here)/.test(password);
}*/

function validate(password) {
  return (isSixCharacterLong(password) && containsALowerCase(password) &&
    containsAUpperCase(password) && !isHex(password));
}

const isSixCharacterLong = (password) => {
  return password.length > 6;
};

const containsALowerCase = (password) => {
  return password.split('').reduce((acc, char) => {
    return (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) ? acc + 1 : acc;
  }, 0) > 0 ? true : false;
};

const containsAUpperCase = (password) => {
  return password.split('').reduce((acc, char) => {
    return (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) ? acc + 1 : acc;
  }, 0) > 0 ? true : false;
};

const containsANumber = (password) => {
  return password.split('').reduce((acc, char) => {
    return (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) ? acc + 1 : acc;
  }, 0) > 0 ? true : false;
};

const isHex = (password) => {
  return password.split('').reduce((acc, char) => {
    return ((char.charCodeAt(0) < 48 && char.charCodeAt(0) > 57) &&
      (char.charCodeAt(0) < 65 && char.charCodeAt(0) > 90) &&
      (char.charCodeAt(0) < 97 && char.charCodeAt(0) > 122)) ? acc + 1 : acc;
  }, 0) > 0 ? true : false;
};
console.log(validate('d.jI38D55'))
