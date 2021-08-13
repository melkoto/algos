class Solution {
    public int numRookCaptures(char[][] board) {
        int rookX = 0, rookY = 0, res = 0, i, j;
        for (i = 0; i < board.length; i++) {
            for (j = 0; j < board[i].length; j++) {
                if (board[i][j] == 'R') {
                    rookX = i;
                    rookY = j;
                }
            }
        }

        return find(board, rookX, rookY, res);
    }

    public int find(char[][] arr, int i, int j, int res) {
        int top = i, bottom = i, left = j, right = j;

        while (top >= 0) {
            if (arr[top][j] == 'B') break;
            else if (arr[top][j] == 'p') {
                res++;
                break;
            }
            top--;
        }

        while (bottom < arr.length) {
            if (arr[bottom][j] == 'B') break;
            else if (arr[bottom][j] == 'p') {
                res++;
                break;
            }
            bottom++;
        }

        while (left >= 0) {
            if (arr[i][left] == 'B') break;
            else if (arr[i][left] == 'p') {
                res++;
                break;
            }
            left--;
        }

        while (right < arr.length) {
            if (arr[i][right] == 'B') break;
            else if (arr[i][right] == 'p') {
                res++;
                break;
            }
            right++;
        }

        return res;
    }
}
//public static void main(String[] args) {
//        char[][] chars1 = {
//        {'.','.','.','.','.','.','.','.'},
//        {'.','.','.','p','.','.','.','.'},
//        {'.','.','.','R','.','.','.','p'},
//        {'.','.','.','.','.','.','.','.'},
//        {'.','.','.','.','.','.','.','.'},
//        {'.','.','.','p','.','.','.','.'},
//        {'.','.','.','.','.','.','.','.'},
//        {'.','.','.','.','.','.','.','.'}
//        };
//        char[][] chars2 = {
//        {'.','.','.','.','.','.','.','.'},
//        {'.','p','p','p','p','p','.','.'},
//        {'.','p','p','B','p','p','.','.'},
//        {'.','p','B','R','B','p','.','.'},
//        {'.','p','p','B','p','p','.','.'},
//        {'.','p','p','p','p','p','.','.'},
//        {'.','.','.','.','.','.','.','.'},
//        {'.','.','.','.','.','.','.','.'}
//        };
//        char[][] chars3 = {
//        {'.','.','.','.','.','.','.','.'},
//        {'.','.','.','p','.','.','.','.'},
//        {'.','.','.','p','.','.','.','.'},
//        {'p','p','.','R','.','p','B','.'},
//        {'.','.','.','.','.','.','.','.'},
//        {'.','.','.','B','.','.','.','.'},
//        {'.','.','.','p','.','.','.','.'},
//        {'.','.','.','.','.','.','.','.'}
//        };
//
//        System.out.println(new Solution().numRookCaptures(chars1));;
//        System.out.println(new Solution().numRookCaptures(chars2));;
//        System.out.println(new Solution().numRookCaptures(chars3));;
//        };
