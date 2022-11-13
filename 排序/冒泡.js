const arr = [5, 2, 7, 8, 34, 7, 39, 12, 56, 9, 1]
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
}
function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]]
}
bubbleSort(arr)
console.log(arr)