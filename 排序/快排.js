const arr = [5, 2, 7, 8, 34, 7, 39, 12, 56, 9, 1]

function quickSort(arr) {
  // 4.结束递归（当ary小于等于一项，则不用处理）
  if (arr.length <= 1) {
    return arr
  }
  // 1. 找到数组的中间项，在原有的数组中把它移除
  const middleIndex = Math.floor(arr.length / 2)
  const middle = arr.splice(middleIndex, 1)[0]
  console.log(middle)
  // 2. 准备左右两个数组，循环剩下数组中的每一项，比当前项小的放到左边数组中，反之放到右边数组中
  const leftArr = [], rightArr = []
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]
    current < middle ? leftArr.push(current) : rightArr.push(current)
  }
  // 3. 递归方式让左右两边的数组持续这样处理，一直到左右两边都排好序为止。
  //（最后让左边+中间+右边拼接成最后的结果）
  return quickSort(leftArr).concat(middle, quickSort(rightArr))
}

console.log(quickSort(arr))	// [1, 2,  5,  7,  7, 8, 9, 12, 34, 39, 56]

