/**
 * @param {number[]} prices
 * @return {number[]}
 */
const finalPrices = function (prices) {
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {
      prices[stack.pop()] -= prices[i];
    }
    stack.push(i);
  }
  return prices;
};

console.log(finalPrices([8, 4, 6, 2, 3]));
console.log(finalPrices([1, 2, 3, 4, 5]));
console.log(finalPrices([10, 1, 1, 6]));
