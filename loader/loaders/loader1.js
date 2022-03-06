//loader本质上是一个函数
// module.exports = function(content,map,meta) {
//     console.log(111);
//     return content;
// }
// 同步loader
module.exports = function(content,map,meta) {
    console.log(111);
    this.callback(null,content,map,meta);
    // return content;
}


module.exports.pitch = function() {
    console.log("pitch 111");
}