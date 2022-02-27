obj = {
    name: 1,
    age: 18
}
obj[Symbol.iterator] = function(){
	var keys = Object.keys(this);
	var count = 0;
	return {
		next(){
			if(count<keys.length){
				return {value: obj[keys[count++]],done:false};
			}else{
				return {value:undefined,done:true};
			}
		}
	}
};

arr = [1, 2, 3, 4, 5, 6]
for (let p of arr) {
    console.log(p,'111')
}
for(let t in obj) {
    console.log(obj[t])
}
// for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值

// for in总是得到对象的key或数组、字符串的下标

// for of总是得到对象的value或数组、字符串的值