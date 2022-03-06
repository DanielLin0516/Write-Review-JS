//loader本质上是一个函数
// module.exports = function(content,map,meta) {
//     console.log(222);
//     return content;
// }
//异步loader
module.exports = function(content,map,meta) {
    console.log(222);
    const callback = this.async();
    setTimeout(() => {
        callback(null,content,map,meta)
    }, 1000);
}
module.exports.pitch = function() {
    console.log("pitch 2222");
}