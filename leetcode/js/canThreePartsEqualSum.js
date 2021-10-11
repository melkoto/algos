/**
 * @param {number[]} arr
 * @return {boolean}
 */
const canThreePartsEqualSum = function (arr) {
  const target = arr.reduce((a, b) => a + b) / 3;
  let sum = 0;
  let temp = 0;

  for (const num of arr) {
    temp += num;
    if (temp === target) {
      sum++;
      temp = 0;
    }
  }
  return sum >= 3;
};

console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]));
console.log(canThreePartsEqualSum([0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]));
console.log(canThreePartsEqualSum([3, 3, 6, 5, -2, 2, 5, 1, -9, 4]));
console.log(canThreePartsEqualSum([0, 0, 0, 0]));
console.log(canThreePartsEqualSum([1, -1, 1, -1]));
