package com.company.string.defangIPaddr;

class Solution {
    public String defangIPaddr(String address) {
        StringBuilder res = new StringBuilder();

        for (int i = 0; i < address.length(); i++) {
            if (address.charAt(i) == '.') {
                res.append("[" + "." + "]");
            } else res.append(address.charAt(i));
        }
        return res.toString();
    }
}

class Main {
    public static void main(String[] args) {
        String p1 = "255.100.50.0";
        System.out.println(new Solution().defangIPaddr(p1));
    }
}