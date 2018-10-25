var year = prompt('请输入您的工作年限');
var vage = prompt('请输入您的薪资');
var rs = 0;

if(year<1){
  if(vage<=8000){
    rs = vage;
  }else{
    rs = vage*1.2;
  }
}else if(year>=1 && year<2){
  if(vage<=10000){
    rs = vage*1.5;
  }else{
    rs = vage *1.7;
  }
}else if(year>=2){
  if(vage<=12000){
    rs = vage*3;
  }else{
    rs = vage*3.2;
  }
}

alert('您的工作年限为：'+year+'年;'+'您的年终奖为：'+rs+'元;');
