function reverseWords(str){
  return str.split(' ').reverse().reduce((first,second) =>{return first+' '+second;})
}
