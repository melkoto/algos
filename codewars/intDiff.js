const intDiff = (arr, n) => {
  let res = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === n) res++
    }
  }

  return res;
}

console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4))
console.log(intDiff([1, 1, 3, 3], 2))
console.log(intDiff([1, 1, 3, 3], 0))
console.log(intDiff([], 2))
console.log(intDiff([ 8, 8, 3, 2, 5 ], 3))
console.log(intDiff([ 8, 8, 3, 2, 5 ], 5))
