package trimMean

import (
	"sort"
)

func TrimMean(arr []int) float64 {
	sort.Ints(arr)
	five := (5 * len(arr)) / 100
	arr = remove(arr, five)
	return sum(arr)
}

func sum(arr []int) float64 {
	var numsSum float64

	for _, num := range arr {
		numsSum += float64(num)
	}
	return numsSum / float64(len(arr))
}

func remove(arr []int, ind int) []int {
	arr = append(arr[ind:])
	return append(arr[:len(arr)-ind])
}
