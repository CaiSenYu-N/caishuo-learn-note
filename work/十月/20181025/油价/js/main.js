// var biaohao = prompt("你想加92还是95？");
// var sheng = prompt("请输入您要加多少升");
//
// if (biaohao) {
//   if(biaohao == 92){
//     if(sheng<20){
//     alert(6*sheng + '元');
//   }else{
//     alert(5.9*sheng + '元');
//     };
//   };
//   if(biaohao == 95){
//     if(sheng<30){
//     alert(7*sheng + '元');
//   }else{
//     alert(6.95*sheng + '元');
//     };
//   };
// };


var type = prompt('请输入油品类型,92或95');
		var val = prompt('请输入升数,单位L');
		var rs = 0; //结果
		if(type == '92'){
			if(val<20){
				// 如果var rs 是重新定义rs; 如果是 rs = xx ,那么是赋值操作.
				rs =  6* val;
			}else{
				rs =  5.9 * val;
			}
		}else if(type == '95'){
			if(val < 30){
				rs = 7 * val;
			}else{
				rs = 6.59 * val;
			}
		}else{
			alert('没有'+type+'号油!');
		}
		// 思考: 要求加上 具体的价格?
		// 您输入的油品为:92; 加的升数为: 30; 单价为:X元 ; 总价为: 177
		alert('您输入的油品为:'+type+'; 加的升数为: '+val+'; 总价为: '+rs);
