//位置：^、$、\b、\B、?=p、(?!p)、(?<=p)、(?<!p)

//1.匹配行的开头 ,在hello后面添加lyt
let str = "hello";
console.log(str.replace(/^/, "❤️"))

//2.美元符号，匹配行的末尾
let str1 = "hello";
console.log(str1.replace(/$/, "❤️"))

//3. \b 单词的边界
let str2 = "xxx_love_study_1.mp4";
console.log(str2.replace(/\b/g, "❤️"))

//4. \B 非单词的边界
let str3 = "[[xxx_love_study_1.mp4]]"
console.log(str3.replace(/\B/g, "❤️"))

//5.(?=p)  符合p的子模式 要在xxx前面去加❤
console.log('lyt_love_study_1.mp4'.replace(/(?=lyt)/g, "❤️"))

//6. (?!p)和上面反过来 第一个匹配到了的就不加❤
console.log('lyt_love_study_1.mp4'.replace(/(?!lyt)/g, "❤️"))

//7. (?<=p)  符合p子模式后面(注意(?=p)表示的是前面)的那个位置。换句话说是，有一个位置，其前面的部分需要满足p子模式。
//我们要在xxx(xxx可以指代任何你喜欢的那个TA)的后面塞一个❤️,怎么写呢？
console.log('lyt_love_study_1.mp4'.replace(/(?<=lyt)/g, "❤️"))

//8.(?<!p) 和上面相反
console.log('lyt_love_study_1.mp4'.replace(/(?!<lyt)/g, "❤️"))


//  \d  匹配数字[0-9]   \D  匹配非数字 除了[0-9]
let number = "1234567ss89ab";
console.log(number.replace(/\d/g, ""))  //匹配所有数字并替换成空
console.log(number.replace(/\D/g, ""))  //匹配所有字符并替换成空

//  \w  包括下划线在内的单个字符，[A-Za-z0-9_] \W 非单字字符
let number1 = "abc123_GG.AA";
console.log(number1.replace(/\w/g, "❤️")) //字母和数字都被匹配 剩下一个点
console.log(number1.replace(/\W/g, "❤️")) //点被匹配  

//循环与重复
// 元字符?代表了匹配一个字符或0个字符。设想一下，如果你要匹配color和colour这两个单词，就需要同时保证u这个字符是否出现都能被匹配到。所以你的正则表达式应该是这样的：/colou?r/。
// 元字符*用来表示匹配0个字符或无数个字符。通常用来过滤某些可有可无的字符串
//元字符+适用于要匹配同个字符出现1次或多次的情况。
//特定次数用{}包裹 假如要匹配a三次 /a{3}/ 'a'我想匹配至少两次就是用/a{2,}/这个正则



// 第一题 将123456789转化为123,456,789
console.log("123456789".replace(/(?!^)(?=(\d{3})+$)/g, ","))

//将手机号18379836654转化为183-7983-6654
let mobile = '18379836654'
let mobileReg = /(?=(\d{4})+$)/g

console.log(mobile.replace(mobileReg, '-'))

//模糊匹配  横向匹配
let reg = /ab{2,3}c/g
let str6 = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc cda'
console.log(str6.match(reg))

//纵向匹配
let reg1 = /a[123]b/g
let str7 = 'a0b a1b a2b a3b a4b'
console.log(str7.match(reg1))
