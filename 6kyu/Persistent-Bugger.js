function persistence(num){
  for( var i=0; (''+num).length!=1;i++){
  num = (''+num).split('').reduce((a,val)=>a*val)
}
return i;
}
