package com.company.array.solve;

import java.util.ArrayList;
import java.util.Arrays;

class Solution {
    public void solve(char[][] board) {
        ArrayList<ArrayList<Integer>> l = new ArrayList<>();
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[0].length; j++) {
                if (board[i][j] == 'O' && isConnected(board, i, j)) {
                    l.add(new ArrayList<>(Arrays.asList(i, j)));
                }
            }
        }

        if (l.size() != 0) {
            for (int i = 0; i < board.length; i++) {
                for (int j = 0; j < board[0].length; j++) {
                    board[i][j] = 'X';
                }
            }
        }

        for (ArrayList<Integer> arr : l) {
            int i = arr.get(0);
            int j = arr.get(1);
            board[i][j] = 'O';
        }

        System.out.println(Arrays.deepToString(board));
        System.out.println(l);
    }

    private boolean isConnected(char[][] b, int i, int j) {
        ArrayList<Integer> is = new ArrayList<>();
        ArrayList<Integer> js = new ArrayList<>();

//        for (int k = 0; k < b.length; k++) {
//           if
//        }
        if 
    }
}

class Main {
    public static void main(String[] args) {
        char[][] b1 = {{'X', 'X', 'X', 'X'}, {'X', 'O', 'O', 'X'}, {'X', 'X', 'O', 'X'}, {'X', 'O', 'X', 'X'}};
        char[][] b2 = {{'X'}};
        char[][] b3 = {{'O', 'O'}, {'O', 'O'}};
        char[][] b4 = {{'X', 'X', 'X'}, {'X', 'O', 'X'}, {'X', 'X', 'X'}};

//        new Solution().solve(b1);
//        new Solution().solve(b2);
//        new Solution().solve(b3);
        new Solution().solve(b4);
    }
}

//i == b.length && j != 0 && j != b[0].length) return true;
