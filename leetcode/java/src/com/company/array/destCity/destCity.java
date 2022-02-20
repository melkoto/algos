package com.company.array.destCity;

import java.util.ArrayList;
import java.util.List;

class Solution {
  public String destCity(List<List<String>> paths) {

    return "No solution yet";
  }
}

class Main {
  public static void main(String[] args) {
    List<List<String>> p1 = new ArrayList<>();
    List<String> p11 = new ArrayList<>();
    p1.add(p11);
    p11.add("London");
    p11.add("New York");

    List<String> p12 = new ArrayList<>();
    p1.add(p12);
    p12.add("New York");
    p12.add("Lima");

    List<String> p13 = new ArrayList<>();
    p1.add(p13);
    p12.add("Lima");
    p12.add("Sao Paulo");
    System.out.println(new Solution().destCity(p1));
  }
}