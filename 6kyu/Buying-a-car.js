function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  var numOfMonths = 0;
  var saved = 0;
  while(saved + startPriceOld < startPriceNew){
    numOfMonths++;
    if(numOfMonths % 2 ===0){percentLossByMonth+=0.5;}
    saved += savingperMonth;
    startPriceNew -= startPriceNew * percentLossByMonth / 100;
    startPriceOld -= startPriceOld * percentLossByMonth / 100;
  }
  var left = Math.round(saved + startPriceOld - startPriceNew);
  return [numOfMonths,left];
}   
