function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivot = partition(arr, start, end)
    quickSort(arr, start, pivot - 1)
    quickSort(arr, pivot + 1, end)
  }
  return arr;
}

function partition(arr, start = 0, end = arr.length - 1) {
  const pivotValue = arr[end];

  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] <= pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }

  swap(arr, pivotIndex, end);

  return pivotIndex;
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}