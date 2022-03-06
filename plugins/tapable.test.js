const {
    SyncHook,
    SyncBailHook,
    SyncWaterfallHook,
    SyncLoopHook,
    AsyncParallelHook,
    AsyncParallelBailHook,
    AsyncSeriesHook,
    AsyncSeriesBailHook,
    AsyncSeriesWaterfallHook
} = require("tapable");
class Lesson {
    constructor() {
        //初始化钩子容器
        this.hooks = {
            go: new SyncBailHook(['address']), //一旦有返回值就会退出
            //异步并行钩子
            leave: new AsyncParallelHook(['name','age'])
        }
    }
    tap() {
        //注册回调函数
        this.hooks.go.tap('class0318', (address) => {
            console.log('class0318', address)
            return 111;
        })
        this.hooks.go.tap('class0410', (address) => {
            console.log('class0410', address)
            return 111;
        })
        this.hooks.leave.tapAsync('class0510',(name,age,cb) => {
           setTimeout(() => {
            console.log('class0510',name,age)
            cb();
           },1000)
        })
    }
    start() {
        //触发hooks
        this.hooks.go.call('c318');
        this.hooks.leave.callAsync('jack',18,function() {
            //代表所有leave容器函数出发完成
            console.log('end~~')
        });
    }
}
const l = new Lesson;
l.tap();
l.start();
