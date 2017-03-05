function find_average(array) {
  return array.reduce(function(valorAnterior, valorActual){
    return valorAnterior + valorActual/array.length;
  },0);
}
