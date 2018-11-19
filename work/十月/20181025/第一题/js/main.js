var num = prompt('请输入任意数字');
var rs1 = (num%5);
var rs2 = (num%6);

if (rs1==0 && rs2==0){
  alert('这个数字同时能被5和6整除');
}else if(rs1==0 && rs2!=0){
  alert('这个数字能被5整除，但不能被6整除');
}else if(rs1!=0 && rs2==0){
  alert('这个数字能被6整除，但不能被5整除')
}else if(rs1!=0 && rs2!=0){
  alert('这个数字不能被5整除，也不能被6整除')
}
