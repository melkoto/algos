package lengthOfLongestSubstring

func LengthOfLongestSubstring(s string) int {
	store, i, ans := make(map[rune]int), 0, 0

	for j, c := range s {
		if pos, ok := store[c]; ok {
			i = max(i, pos)
			//fmt.Println(pos, "pos")
		}

		ans = max(ans, j-i+1)
		store[c] = j + 1 //  abcabcbb
	}
	return ans
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
