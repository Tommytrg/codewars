function boolToWord( bool ){
  return check(bool);
}

function check(bool){
  return bool ? yes() : no();
}

function yes(){
  return 'Yes';
}
function no(){
  return 'No';
}
//:)
