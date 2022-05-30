function sortedSquaredArray(arr) {
  // Write your code here.
  const res = Array.from({length: arr.length}, () => 0) //?
  let start = 0, end = arr.length - 1

  for (let i = arr.length - 1; i >= 0; i--) {
    let startNum = Math.abs(arr[start])
    let endNum = Math.abs(arr[end])

    if (endNum >= startNum) {
      res[i] = endNum**2
      end--
    }
    else if (startNum > endNum) {
      res[i] = startNum**2
      start++
    }
  }

  return res
}

console.log(sortedSquaredArray([1, 4, 9, 25, 36, 64, 81]))
console.log(sortedSquaredArray([-10, -5, 0, 5, 10]))
