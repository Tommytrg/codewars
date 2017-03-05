function zero(n) {
  if(n===undefined){
    return 0;
  }else{
    return operation(n[0],n[1],0);
  }
}

function one(n) {
  if(n===undefined){
    return 1;
  }else{
    return operation(n[0],n[1],1);
  }
}

function two(n) {
  if(n===undefined){
    return 2;
  }else{
    return operation(n[0],n[1],2);
  }
}

function three(n) {
  if(n===undefined){
    return 3;
  }else{
    return operation(n[0],n[1],3);
  }
}

function four(n) {
  if(n===undefined){
    return 4;
  }else{
    return operation(n[0],n[1],4);
  }
}

function five(n) {
  if(n===undefined){
    return 5;
  }else{
    return operation(n[0],n[1],5);
  }
}

function six(n) {
  if(n===undefined){
    return 6;
  }else{
    return operation(n[0],n[1],6);
  }
}

function seven(n) {
  if(n===undefined){
    return 7;
  }else{
    return operation(n[0],n[1],7);
  }
}

function eight(n) {
  if(n===undefined){
    return 8;
  }else{
    return operation(n[0],n[1],8);
  }
}
function nine(n) {
  if(n===undefined){
    return 9;
  }else{
    return operation(n[0],n[1],9);
  }
}
function plus(n) {return n+'+';}
function minus(n) {return n+'-';}
function times(n) {return n+'*';}
function dividedBy(n) {return n+'/';}

function operation(n,op,m){
  switch(op){
    case '+': return parseInt(m)+parseInt(n);
    case '-': return m-n;
    case '*': return m*n;
    case '/': return m/n;
  }
}
