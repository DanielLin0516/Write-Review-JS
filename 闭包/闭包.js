// for (var i = 1; i <= 5; i++) {
//     (function (j) {
//         setTimeout(function timer() { console.log(j) }, j * 1000)
//     })(i)
// }
// for (var i = 1; i <= 5; i++) {
//     (function(j){
//         setTimeout(function timer() { console.log(j) }, j * 1000)
//     })
// }
let a = 'Hello World!';
function first() {
  console.log('Inside first function');
  second();
  console.log('Again inside first function');
}
function second() {
  console.log('Inside second function');
}
first();

