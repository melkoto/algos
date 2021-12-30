package main

import (
	"fmt"
	"go/reorderSpaces"
)

func main() {
	fmt.Println(reorderSpaces.ReorderSpaces("  this   is  a sentence "))
	fmt.Println(reorderSpaces.ReorderSpaces("a"))
	fmt.Println(reorderSpaces.ReorderSpaces(" a  "))
	fmt.Println(reorderSpaces.ReorderSpaces("can    you"))
}
