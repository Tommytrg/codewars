function divisors(integer) {
  var div = [];
  for(var i = 2; i < integer; i++){
    if(integer % i === 0){
      div.push(i);
    }
  }
  if(div.length === 0){
    return i + " is prime";
  }else{
    return div;
  }
}
