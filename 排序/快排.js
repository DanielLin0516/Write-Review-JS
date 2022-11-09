const arr = [5, 2, 7, 8, 34, 7, 39, 12, 56, 9, 1]

function quickSort(arr) {
  // 4.结束递归（当ary小于等于一项，则不用处理）
  if (arr.length < 2) {
    return arr;
  }
  let previot = arr[arr.length - 1];
  let left = arr.filter((item, i) => item <= previot && i !== arr.length - 1);
  let right = arr.filter((item, i) => item > previot);
  return [...quickSort(left), previot, ...quickSort(right)]
}

console.log(quickSort(arr))
function quickSort1(arrs, start, end) {
  if (start > end) return;
  let j = end;
  let i = start;
  let pivot = arrs[start];
  while(i !== j) {
    while(i < j && arrs[j] >= pivot) j--;
    while(i < j && arrs[i] <= pivot) i++;
    if(i < j) {
      swaper(i, j, arrs);
    }
  }
  arrs[start] = arrs[i];
  arrs[i] = pivot;
  quickSort1(arrs, start, i - 1);
  quickSort1(arrs, i + 1, end);
  return arrs;
}
function swaper(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
console.log(quickSort1(arr, 0, arr.length - 1));
