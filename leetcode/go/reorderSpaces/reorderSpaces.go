package reorderSpaces

import (
	"strings"
)

func ReorderSpaces(text string) string {
	var w []string               // words
	s, t := 0, strings.Builder{} // s - spaces, t - temp

	for _, c := range text {
		if c == ' ' {
			s++

			if t.Len() > 0 {
				w = append(w, t.String())
				t.Reset()
			}
		} else {
			t.WriteRune(c)
		}
	}

	if t.Len() > 0 {
		w = append(w, t.String())
		t.Reset()
	}

	if len(w) == 1 {
		t.Write([]byte(w[0]))
		t.Write([]byte(strings.Repeat(" ", s)))
		return t.String()
	}

	sbw := s / (len(w) - 1)  // sbw - space between words
	sate := s % (len(w) - 1) // sate - space at the end (xD)

	for i := 0; i < len(w); i++ {
		curr := w[i]
		t.Write([]byte(curr))
		if i == len(w) -1 {
			break
		}
		t.Write([]byte(strings.Repeat(" ", sbw)))
	}

	t.Write([]byte(strings.Repeat(" ", sate)))
	return t.String()
}
