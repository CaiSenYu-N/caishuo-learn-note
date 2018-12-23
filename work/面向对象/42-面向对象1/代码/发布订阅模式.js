//发布订阅模式
var ob = {};
ob.list = [];

ob.add = function(fn){
	ob.list.push(fn);
}

ob.trigger = function(){
	for(var i = 0 ; i < this.list.length ; i++){

		this.list[i].apply(this,arguments);
	}
}

// 一次订阅
ob.add(function(name,color){
	console.log('name==>'+name);
	console.log('color==>'+color);
})

ob.add(function(name,age){
	console.log('name==>'+name);
	console.log('age==>'+age);
})

ob.trigger('张三','red');
ob.trigger('李四',30);