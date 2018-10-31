var monthArr = [31,28,31,30,31,30,31,31,30,31,30,31];

var dateStr = prompt('请输入年份，格式：yyyy-mm-dd');
alert(dateStr+'为当年的第'+getMyDay(dateStr)+'天');

function getMyDay(dateStr){
  var date = new Date(dateStr);
  console.log(date);
  var year = date.getFullYear();
  var mounth = date.getMounth()+1;
  var day = date.getDate();
  var totalDay = 0;
  for (var i=1; i<mounth; i++){
    totalDay += mounthArr[i-1];
  }
  totalDay += day;
  if(mounth>2){
    if(isRun(date)){
      totalDay += 1；
    }
  }
  return totalDay;
}

function isRun(date){
  var year = date.getFullYear();
  return (year%4==0 && year%100!=0) || year%400==0;
}
