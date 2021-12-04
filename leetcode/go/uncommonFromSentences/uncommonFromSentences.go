package uncommonFromSentences

import (
	"fmt"
	"strings"
)

func UncommonFromSentences(s1 string, s2 string) []string {
	s := make(map[string]int)

	for _, word := range strings.Split(s1, " ") {
		if _, ok := s[word]; ok {
			fmt.Println("i am in")
			s[word] = s[word] + 1
		} else {
			s[word] = 1
		}

	}

	for _, word := range strings.Split(s2, " ") {
		if _, ok := s[word]; ok {
			fmt.Println("i am in")
			s[word] += 1
		} else {
			s[word] = 1
		}

	}

	var res []string

	for key, value := range s {
		if value == 1 {
			res = append(res, key)
		}
	}
	fmt.Println(s)
	return res

	//return []string{"sweet", "sour"}
}

