function comp(array1, array2){

    var sum1 = 0, sum2=0;
    if(array1 === null ||array2 === null)
      return false;
    var array1Squared = array1.map(item =>{
      return item*item;
    });

     array1Squared.sort((a,b) =>{
      return a-b;
    });

    array2.sort((a,b) =>{
      return a-b;
    });

   for(var j = 0; j <array2.length; j++){
    if(array1Squared[j] !== array2[j])
      return false;
    }
   return true;
  }
