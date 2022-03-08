const { validate } = require("schema-utils")
const path = require('path')
const globby = require('globby');
const schema = require('./schema.json')
class CopyWebpackPlugin {
    constructor(options = {}) {
        // 验证option是否符合规范
        validate(schema, options, {
            name: 'CopyWebpackPlugin'
        })
        this.options = options;
    }
    apply(compiler) {
        // 初始化compilation
        compiler.hooks.thisCompilation.tap('CopyWebpackPlugin', (compilation) => {
            // 在添加资源的hooks
            compilation.hooks.additionalAssets.tapAsync('CopyWebpackPlugin', async (cb) => {
                const { from, ignore } = this.options;
                const to = this.options.to ? this.options.to : '.'
                const context = compiler.options.context; //process.cwd()
                const absoluteFrom = path.isAbsolute(from) ? from : path.resolve(context, from)
                //将from中的资源复制到to中
                // 读取from中所有资源
                //globby（要处理的文件夹，options）
                const paths = await globby(absoluteFrom, { ignore })
                // 过滤掉要忽略的文件
                // 生成webpack格式的资源文件
                // 添加到compilation中
                console.log(paths)
            })
        })
    }
}
module.exports = CopyWebpackPlugin;