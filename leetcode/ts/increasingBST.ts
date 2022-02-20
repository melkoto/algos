// @ts-ignore
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function increasingBST(root: TreeNode | null): TreeNode | null {
  return null;
}

const root: TreeNode = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);

root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(8);

root.left.left.left = new TreeNode(1);
root.right.right.left = new TreeNode(7);
root.right.right.right = new TreeNode(9);

console.log(root);
console.log(increasingBST(root));
