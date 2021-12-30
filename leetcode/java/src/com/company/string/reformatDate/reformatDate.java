package com.company.string.reformatDate;

import java.util.Arrays;
import java.util.Objects;

class Solution {
    public String reformatDate(String date) {
        String[] months = {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"};
        String[] splitDate = date.split(" ");
        int index = getMonth(months, splitDate[1]);

        String year = splitDate[2];
        String month = index < 10 ? "0" + index : "" + index;
        String day = getDay(splitDate[0]);

        return year + "-" + month + "-" + day;
    }

    private int getMonth(String[] a, String str) {
        for (int i = 0; i < a.length; i++) {
            if (a[i].equals(str)) {
                return i + 1;
            }
        }
        return -1;
    }

    private String getDay(String date) {
        return date.length() == 3 ? "0" + date.charAt(0) : date.substring(0,2);
    }
}

class Main {
    public static void main(String[] args) {
        String d1 = "20th Oct 2052";
        String d2 = "6th Jun 1933";
        String d3 = "26th May 1960";

        System.out.println(new Solution().reformatDate(d1));
        System.out.println(new Solution().reformatDate(d2));
        System.out.println(new Solution().reformatDate(d3));
    }
}
