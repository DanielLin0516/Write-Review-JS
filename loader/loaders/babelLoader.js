const { validate } = require("schema-utils");
const babelSchema = require("./babelSchema.json")
const babel = require("@babel/core")
const util = require("util");
const transform = util.promisify(babel.transform);
module.exports = function(content,map,meta) {
    const options = this.getOptions() || {};
    //校验
    validate(babelSchema,options,{
        name: "Babel Loader"
    })
    //异步loader
    const callback = this.async();
    //使用babel编译
    transform(content,options)
    .then((code,map) => callback(null,code,map,meta))
    .catch(e => callback(e))
}