package com.company.graphs.validPath;

class Solution {
    public boolean validPath(int n, int[][] edges, int start, int end) {
        UnionFind uf = new UnionFind(edges.length);

        for (int[] edge: edges) {
            uf.union(edge[0], edge[1]);
        }
        return uf.connected(start, end);
    }
}

class UnionFind {
    int[] root;
    int[] rank;

    public UnionFind(int size) {
        root = new int[size];
        rank = new int[size];

        for (int i = 0; i < size; i++) {
            root[i] = i;
            rank[i] = 1;
        }
    }

    public int find(int x)  {
        if (x == root[x]) {
            return x;
        }
        root[x] = find(root[x]);
        return root[x];

    }

    public void union(int x, int y) {
        int rootX = find(x);
        int rootY = find(y);

        if (rootX != rootY) {
            if (rank[rootX] > rank[rootY]) {
                root[rootY] = rootX;
            } else if (rank[rootX] < rank[rootY]) {
                root[rootX] = rootY;
            } else {
                root[rootY] = rootX;
                rank[rootX] += 1;
            }
        }
    }

    public boolean connected(int x, int y) {
        return find(x) == find(y);
    }

}
