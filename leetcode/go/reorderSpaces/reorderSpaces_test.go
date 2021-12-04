package reorderSpaces

import (
	"github.com/stretchr/testify/require"
	"testing"
)

func TestReorderSpaces(t *testing.T) {
	tt := []struct{
		name string
		want string
	} {
		{"  this   is  a sentence ", "this   is   a   sentence"},
		{" practice   makes   perfect", "practice   makes   perfect "},
		{"hello   world", "hello   world"},
		{"  walks  udp package   into  bar a", "walks  udp  package  into  bar  a "},
		{"a", "a"},
		{" a  ", "a   "},
	}

	for _, tc := range tt {
		tc = tc

		t.Run(tc.name, func(t *testing.T) {
			got := ReorderSpaces(tc.name)
			require.Equal(t, tc.want, got)
		})
	}
}
