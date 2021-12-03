package lengthOfLongestSubstring

import (
	"github.com/stretchr/testify/require"
	"testing"
)

func TestLongestSubstring(t *testing.T) {
	tests := []struct {
		str      string
		expected int
	}{
		{"abcabcbb", 3},
		{"bbbbb", 1},
		{"pwwkew", 3},
		{"", 0},
	}

	for _, tc := range tests {
		tc := tc

		t.Run(tc.str, func(t *testing.T) {
			got := LengthOfLongestSubstring(tc.str)
			require.Equal(t, tc.expected, got)
		})
	}
}
