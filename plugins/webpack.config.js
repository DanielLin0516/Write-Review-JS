// const Plugin1 = require('./plugins/Plugin1')
const CopyWebpackPlugin = require('./plugins/CopyWebpackPlugin')
module.exports = {
    plugins:[
        // new Plugin1()
        // new Plugin2()
        new CopyWebpackPlugin({
            from:'public',
            //to:'.',
            ignore:['index.html']
        })
    ]
}