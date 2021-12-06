package closestValue

import "math"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func closestValue(root *TreeNode, target float64) int {
	var result int
	helper(root, &result, math.MaxFloat64, target)
	return result
}

func helper(root *TreeNode, res *int, temp, target float64) {
	if root == nil {
		return
	}

	if math.Abs(float64(root.Val) - target) < temp {
		temp = math.Abs(float64(root.Val) - target)
		*res = root.Val
	}

	if target < float64(root.Val) {
		helper(root.Left, res, temp, target)
	}

	if target > float64(root.Val) {
		helper(root.Right, res, temp, target)
	}
}
