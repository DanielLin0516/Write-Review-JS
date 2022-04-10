// setTimeout(() => {
//     console.log(1);
//   }, 1000)
//   new Promise(function(resolve){
//       console.log(2);
//       for(var i = 0; i < 10000; i++){
//           i == 99 && resolve();
//       }
//   }).then(function(){
//       console.log(3)
//   });
//   console.log(4)
  



// console.log('script start');

// setTimeout(() => {
//     console.log('time1');
// }, 1 * 2000);

// Promise.resolve()
// .then(function() {
//     console.log('promise1');
// }).then(function() {
//     console.log('promise2');
// });


// async function foo() {
//     await bar()
//     console.log('async1 end')
// }
// foo()

// async function errorFunc () {
//     try {
//         await Promise.reject('error!!!')
//     } catch(e) {
//         console.log(e)
//     }
//     console.log('async1');
//     return Promise.resolve('async1 success')
// }
// errorFunc().then(res => console.log(res))

// function bar() {
//     console.log('async2 end') 
// }

// console.log('script end');



// setTimeout(() => {
//     console.log(1)
// }, 0)

// const P = new Promise((resolve, reject) => {
//     console.log(2)
//     setTimeout(() => {
//         resolve()
//         console.log(3)
//     }, 0)
// })

// P.then(() => {
//     console.log(4)
// })
// console.log(5);

// var p1 = new Promise(function(resolve, reject){
//     resolve("2")
// })

// setTimeout(function(){
//     console.log("1")
// },10)

// p1.then(function(value){
//     console.log(value)
// })

// setTimeout(function(){
//     console.log("3")
// },0)

const pro = new Promise((resolve,reject) => {
    console.log('1');
    setTimeout(() => {
        console.log('timeout')
        resolve('2');
    });
    reject('2');
})
console.log('4');
pro.then(res => {
    console.log(res)
    return '5'
}).catch(err => {
    console.log(err)
    return '6'
}).then(res => {
    console.log(res)
})