//loader本质上是一个函数
const { validate } = require("schema-utils")
const schema = require("./schema.json")
module.exports = function (content, map, meta) {
    const options = this.getOptions();
    console.log(333,options);
    //校验options
    validate(schema,options, {
        name:'loader3'
    })
    return content;
}
module.exports.pitch = function () {
    console.log("pitch 333");
}