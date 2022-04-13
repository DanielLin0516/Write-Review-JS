const arr = [5, 2, 7, 8, 34, 7, 39, 12, 56, 9, 1]
function bubbleSort(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1)
            }
        }
    }
}
function swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]]
}
bubbleSort(arr)
console.log(arr)