# Definition for a Node.
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.parent = None

class Solution:
    def lowestCommonAncestor(self, p: Node, q: Node) -> Node:
        ps = set()

        while p:
            ps.add(p)
            p = p.parent

        while q:
            if q in ps:
                return q

            q = q.parent

        return None



