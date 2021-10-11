/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const numWaterBottles = function(numBottles, numExchange) {
  let result = 0;

  while (numBottles > 0) {
    if (numBottles < numExchange)  {
      result += numBottles
      break
    }
    result += numExchange;
    numBottles -= numExchange - 1
  }
  return result
};

console.log(numWaterBottles(9, 3))
console.log(numWaterBottles(15, 4))
console.log(numWaterBottles(2,3))