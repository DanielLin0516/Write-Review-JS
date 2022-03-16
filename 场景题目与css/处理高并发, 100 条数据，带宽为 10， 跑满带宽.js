const data = new Array(100).fill("");
for (let i = 0; i < 100; i++) {
    data[i] = '第' + i + '条数据';
}

var requestFn = idx => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data[idx])
        }, 1000 * Math.random())
    })
}
const dealwith = async (number) => {
    let pools = [];
    let num = 0;
    //利用循环填满池子
    for (let i = 0; i < number;i++) {
        let task = requestFn(i).then((res) => {
            return i;
        })
        pools.push(task);
        num++;
    }
    const run = async (pools) => {
        let index = await Promise.race(pools); // 这里index等于Promise.race第一个完成的任务的脚标
        // console.log(index)
        console.log(num,index)
        if (num < data.length) {
            pools[index % 10] = requestFn(num).then(() => { return num ; }); // 一旦有一个任务完成，马上把他替换成一个新的任务，继续下载
            num++;
            console.log(`并发量${pools.length},${index}被替换`)
            await run(pools);
        }
    }
    run(pools);
}
dealwith(10)

