var num = prompt('请输入任意数字:');

var count = 0;
for(var i=0; i<num; i++){
  if(num%i==0){
    count ++;
    console.log(i)
  }
}

console.log(count);
