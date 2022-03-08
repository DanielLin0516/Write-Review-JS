class Plugin1 {
    apply(compiler) {
        compiler.hooks.emit.tap('Plugin1',(compilation) => {
            console.log('emit.tap 1111')
        })
        compiler.hooks.emit.tapAsync('Plugin1',(compilation,cb) => {
            setTimeout(() => {
                console.log('emit.tap 1111')
                cb();
            }, 2000);
        })
        compiler.hooks.afterEmit.tap('Plugin1',(compilation) => {
            console.log('afterEmit.tap 1111')
        })
        compiler.hooks.done.tap('Plugin1',(stats) => {
            console.log('done.tap 1111')
        })
    }
}
module.exports = Plugin1