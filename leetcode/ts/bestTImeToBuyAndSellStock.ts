function maxProfit(prices: number[]): number {
  let minPrice = 10 ** 4;
  let bestProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    let currentPrice = prices[i];

    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    } else if (currentPrice - minPrice > bestProfit) {
      bestProfit = currentPrice - minPrice;
    }
  }
  return bestProfit;
}

maxProfit([7, 1, 5, 3, 6, 4]);
// maxProfit([7, 6, 4, 3, 1]);
// maxProfit([1]);
