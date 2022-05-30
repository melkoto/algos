function isValidSubsequence(array, sequence) {
  // Write your code here.
  if (sequence.length > array.length) return false

  // let p1 = 0, p2 = 0
  let j = 0

  for (let i = 0; i < sequence.length; i++) {
    while (array[j] !== sequence[i] && j < array.length) j++

    if (array[j++] !== sequence[i]) return false
  }
  return true
}

console.log(isValidSubsequence( [5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
console.log(isValidSubsequence( [5, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
