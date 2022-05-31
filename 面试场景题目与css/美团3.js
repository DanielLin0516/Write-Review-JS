// 时间限制： 3000MS
// 内存限制： 589824KB
// 题目描述：
// 小美现在在厨房做饭。小美发现食材现在只够每种菜做一份。

// 现在同一时刻（即不分先后顺序）来了n个顾客。每个顾客都有想两份要点的菜。只有当顾客吃到全部自己想要的菜的时候，顾客才会满意。

// 现在你的任务是，合理地接取顾客的订单要求，尽可能让更多的顾客满意，并输出最多有多少顾客可以满意。



// 输入描述
// 第一行两个正整数n, m

// n表明有多少顾客前来点菜，m表示小美现在能做的菜的编号范围在[1, m]。

// 接下来n行，每行两个数字，表明一名顾客的所点的两道菜的编号。

// 其中80%的数据保证2 <= n <= 10, 2 <= m <= 20

// 另外20%的数据保证2 <= n <= 20, 2 <= m <= 40

// 输出描述
// 一行一个正整数表示最多有多少顾客可以满意。


// 样例输入
// 3 4
// 1 2
// 2 3
// 3 4
    const chunk = (arr, size = 1) => {
        let result = [];
        let temp = [];
        arr.forEach(item => {
            if (temp.length === 0) {
                result.push(temp)
            }
            temp.push(item);
            if (temp.length === size) {
                temp = [];
            }
        });
        return result
    }
    function order(n, m, ...args) {
        let sati = 0;
        let arr = chunk([...args],2);
        let waitor = [];
        let n1 = 0;
        for(let i = 0; i < m ; i++) {
            waitor[i] = i + 1;
        }
        for(let i = 0; i < arr.length;i++) {
            for(let j = 0; j < 2;j++) {
                if(waitor.includes(arr[i][j])) {

                    waitor.splice(waitor.indexOf(arr[i][j]),1);

                }else {
                    n1 = n1 +1;
                    break;
                }
            }

            sati = sati + 1;
        }
        return sati - n1;
    }
    console.log(order(3, 4,
        1, 2,
        2, 3,
        3, 4)) 



