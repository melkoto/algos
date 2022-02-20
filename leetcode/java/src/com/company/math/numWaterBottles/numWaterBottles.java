package com.company.math.numWaterBottles;

class Solution {
  public int numWaterBottles(int numBottles, int numExchange) {
    int res = 0;

    while (numBottles > 0) {
      if (numBottles < numExchange) {
        res += numBottles;
        break;
      }
      res += numExchange;
      numBottles -= numExchange - 1;
    }

    return res;
  }
}