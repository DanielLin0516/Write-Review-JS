const arr = [5, 2, 7, 8, 34, 7, 39, 12, 56, 9, 1]

function quickSort(arr) {
  // 4.结束递归（当ary小于等于一项，则不用处理）
  if(arr.length < 2) {
    return arr;
  }
  let previot = arr[arr.length - 1];
  let left = arr.filter((item,i) => item <= previot && i !==  arr.length - 1);
  let right = arr.filter((item,i) => item > previot );
  return [...quickSort(left),previot,...quickSort(right)]
}

console.log(quickSort(arr))

