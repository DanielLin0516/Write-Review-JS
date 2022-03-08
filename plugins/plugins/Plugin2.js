const fs = require('fs')
const util = require('util')
const path = require("path")
const webpack = require("webpack")
const {RawSource} = webpack.sources
const readFile = util.promisify(fs.readFile)
class Plugin2 {
    apply(compiler) {
        //初始化colpilation钩子
        compiler.hooks.thisCompilation.tap("Plugin2", (compilation) => {
            // console.log(compilation);
            //添加资源
            compilation.hooks.additionalAssets.tapAsync("Plugin2",async (cb) => {
                // console.log(compilation)
                const content = "hello plugins"
                compilation.assets['a.txt'] = {
                    //文件大小
                    size() {
                        return content.size;
                    },
                    //文件内容
                    source() {
                        return content;
                    }
                }
                const data = await readFile(path.resolve(__dirname,"b.txt"));
                compilation.assets["b.txt"] =new RawSource(data)
                // compilation.emitAssets('b.txt',new RawSource(data))
                cb()
            })
        })
    }
}
module.exports = Plugin2