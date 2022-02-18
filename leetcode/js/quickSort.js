function partition(arr, start = 0, end = arr.length - 1) {
    const pivotValue = arr[end]

    let pivotIndex = start

    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, pivotIndex)
            pivotIndex++
        }
    }

    // arr[end] = arr[pivotIndex]
    // arr[pivotIndex] = pivotValue
    swap(arr, pivotIndex, end)
    console.log(arr)
    return pivotIndex;
}

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

console.log(partition([2,4,6,3,9]))
