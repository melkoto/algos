package maxProductDifference

func MaxProductDifference(nums []int) int {
	min1, min2 := 10000, 10000
	max1,max2 := 0, 0

	for _, num := range nums {
		if num <= min1 {
			min2 = min1
			min1 = num
		} else if num <= min2 {
			min2 = num
		}

		if num >= max1 {
			max2 = max1
			max1 = num
		} else if num >= max2 {
			max2 = num
		}
	}

	return (max1*max2) - (min1*min2)
}
