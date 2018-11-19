function add(x,y){
  return x+y;
}

function add2(num1,num2,num3){
  return add((num1,num2),num3);
}

alert(add(2,3));
alert(add2(1,5,9));
