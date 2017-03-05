function nbDig(n, d) {
  var exp = [];
   var count = 0;
  for(var i = 0; i < n+1; i++){
    exp.push((i*i).toString());
  }
  for(var j = 0; j < exp.length; j++){
    for(var k = 0; k < exp[j].length; k++){
      if(exp[j][k] === d.toString()){
        count++;
      }
    }
  }
  return count;
}
