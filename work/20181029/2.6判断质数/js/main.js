var num =parseInt(prompt('请输入任意字符：'));

var isZhi = true;

for(var i=2; i<num; i++){
  if( num % i == 0 ){
    isZhi = false;
    break;
  }
}

console.log('你输入的数字：'+num+' '+(isZhi?'是质数':'不是质数!'));
