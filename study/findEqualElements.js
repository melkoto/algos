const a = [ 1, 2, 4, 7, 11, 19 ];
const b = [ 2, 7, 19, 28, 31 ];

function findEqualElements(arr1, arr2) {
  let s = {}
  let res = []

  for (let num of arr1) {
    if (num in s) {
      s[num]++
    } else {
      s[num] = 1
    }
  }

  for (let num of arr2) {
    if ((num in s) && s[num] > 0) {
      res.push(num)
      s[num]--
    }
  }

  return res
}


// Примеры
findEqualElements([1, 2, 3], [2]) // => [2]
findEqualElements([2], [1, 2, 3]) // => [2]
findEqualElements([1, 2, 2, 3], [2, 2, 2, 2]) // => [2, 2]
findEqualElements([2, 2, 2, 2], [1, 2, 2, 3]) // => [2, 2]