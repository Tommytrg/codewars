function digPow(n, p){
  let result = sumOfPow(n,p);
   return searchK(n,result);
}
function searchK(n,result){
  let i = 0;
  console.log(n+' '+result)
  while( i * n <= result){
    if(i * n === result){
      return i;
    }
    i++;
  }
  return -1;
}
function sumOfPow(n,p){
  return n.toString().split('').reduce((a, b, index) => {
    return parseInt(a) + Math.pow(parseInt(b), index+p) ;
  },0);
}
