function bubbleSort(arr) {
  let swapped = true
  let len = arr.length
  while (swapped) {
    swapped = false
    for (let i = 1; i < len; i++) {
      let curr = arr[i]
      let prev = arr[i - 1]
      if (curr <= prev) {
        swap(arr, i, i-1)
        swapped = true
      }
    }
    len--
  }

  return arr
}

function swap(arr, i, j) {
  const tmp = arr[i]

  arr[i] = arr[j]
  arr[j] = tmp
}