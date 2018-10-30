var a,b,c;

for(var i=100; i<1000; i++) {
  var a = Math.floor(i%10);
  var b = Math.floor((i/10)%10);
  var c = Math.floor(i/100);
  if(a*a*a+b*b*b+c*c*c == i) {
    console.log(i);
  }
}
