const arr = [5, 2, 7, 8, 34, 7, 39, 12, 56, 9, 1]
function Sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let mid = i;
        for (let j = i; j < arr.length - 1; j++) {
            if (arr[mid] > arr[j]) {
                mid = j
            }
        }
        if (mid !== i) {
            swap(arr, i, mid)
        }
    }
}
function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]]
}
Sort(arr)
console.log(arr)