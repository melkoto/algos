package uncommonFromSentences

import (
	"fmt"
	"github.com/stretchr/testify/require"
	"testing"
)

func TestUncommonFromSentence(t *testing.T)  {
	tt := []struct {
		str1 string
		str2 string
		expected []string

	}{
		{str1: "this apple is sweet", str2: "this apple is sour", expected: []string{"sweet", "sour"}},
		{"apple apple", "banana", []string{"banana"}},
	}

	for _, tc := range tt {
		tc := tc

		testName := fmt.Sprintf("%s, %s", tc.str1, tc.str2)
		t.Run(testName, func(t *testing.T) {
			got := UncommonFromSentences(tc.str1, tc.str2)
			require.Equal(t, tc.expected, got)
		})
	}
}
