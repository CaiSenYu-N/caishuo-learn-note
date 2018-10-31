var n = prompt('请输入任意数：');
alert('您输入的数字为：'+n+'值为'+fb(n));

function fb(n){
  if(n==1 || n==2){
    return 1;
  }
  return fb(n-1)+fb(n-2);
}
