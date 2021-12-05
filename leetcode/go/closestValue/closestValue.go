package closestValue

import "math"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

var result int

func closestValue(root *TreeNode, target float64) int {
	dfs(root, result, math.MaxFloat64, target)
	return result
}

func dfs(root *TreeNode, res int, temp, target float64) {
	if root == nil {
		return
	}

	if math.Abs(float64(root.Val) - target) < temp {
		temp = math.Abs(float64(root.Val) - target)
		res = root.Val
	}

	if target < float64(root.Val) {
		dfs(root.Left, res, temp, target)
	}

	if target > float64(root.Val) {
		dfs(root.Right, res, temp, target)
	}
}
