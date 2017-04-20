/*jshint esversion:6*/
function type(val) {
  let valueType = val === null ? 'Null' : typeof val;
  switch(valueType){
    case 'undefined':
      return checkUndefined(val);
    case 'Null':
      return 'Null';
    case 'number':
      return checkNumber(val);
    case 'boolean':
      return checkBoolean(val);
    case 'function':
      return checkFunction(val);
    case 'string':
      return checkString(val);
    case 'object':
      return checkObject(val);
  }
}

const checkUndefined = (val) => {
  return 'Undefined';
};

const checkNumber = (val) => {
  if(val % 1 === 0){
    return 'Number Integer';
  }else{
    if(val.toString().indexOf('.') !== -1){
      return 'Number Float';
    }else{
      if(Number.isNaN(val)){
        return 'Number NaN';
      }else{
        return 'Number Infinite';
      }
    }
  }
};

const checkBoolean = (val) => {
  return 'Boolean';
};

const checkFunction = (val) => {
  return 'Function';
};

const checkString = (val) => {
  if(typeof parseInt(val,10) === 'number' && val.indexOf('a') === -1 &&
  val.indexOf('b') === -1 && val.indexOf('c') === -1 &&
  val.indexOf('d') === -1 && val.indexOf('e') === -1 &&
  val.indexOf('e') === -1 && val.indexOf('f') === -1){
    return 'String Numeric';
    //return 'String';
  }else{
    return 'String';
  }
};

const checkObject = (val) => {


  if(val.toString()[0] === '/'){
    return 'RegExp';
    //return 'Object';
  }else{
    if(Array.isArray(val)){
      return 'Array';
      //return 'Object';
    }else{
      if(JSON.stringify(a).indexOf(':')!== -1){
        return 'Object';
      }else{

      }
        return 'Custom';
        //return 'Object';
      }
    }
};

function custom(){ }
const a = {b:1};
console.log(JSON.stringify(a));
//console.log(type(new custom()));
