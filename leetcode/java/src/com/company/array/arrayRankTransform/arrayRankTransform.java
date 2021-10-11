package com.company.array.arrayRankTransform;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

class Solution {
  public int[] arrayRankTransform(int[] arr) {
    Map<Integer, Integer> store = new HashMap<>();
    int[] copy = arr.clone();
    Arrays.sort(copy);
    int ind = 0;

    for (int i = 0; i < arr.length; i++) {
      if (!store.containsKey(copy[i])) {
        store.put(copy[i], ind+1);
        ind++;
      };
    }

    for (int i = 0; i < arr.length; i++) {
      arr[i] = store.get(arr[i]);
    }
    return arr;
  }
}

class Main {
  public static void main(String[] args) {
    int[] arr1 = {40,10,20,30};
    int[] arr2 = {37,12,28,9,100,56,80,5,12};
    int[] arr3 = {100,100,100};

    System.out.println(Arrays.toString(new Solution().arrayRankTransform(arr1)));
    System.out.println(Arrays.toString(new Solution().arrayRankTransform(arr2)));
    System.out.println(Arrays.toString(new Solution().arrayRankTransform(arr3)));
  }
}