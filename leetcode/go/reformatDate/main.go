package main

import (
	"fmt"
	"strings"
)

func reformatDate(date string) string {
	months := []string{"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}
	dateArr := strings.Split(date, " ")

	return fmt.Sprintf("%s-%s-%s", dateArr[2], getMonth(months, dateArr[1]), getDay(dateArr[0]))

}

func getDay(day string) string {
	if len(day) == 3 {
		return fmt.Sprintf("0%s", string(day[0]))
	}
	return day[:2]
}

func getMonth(months []string, month string) string {
	for i, m := range months {
		if m == month {
			if i+1 < 10 {
				return fmt.Sprintf("0%d", i+1)
			} else {
				return fmt.Sprintf("%d", i+1)
			}
		}
	}
	return ""
}

func main() {
	fmt.Println(reformatDate("20th Oct 2052"))
	fmt.Println(reformatDate("6th Jun 1933"))
	fmt.Println(reformatDate("26th May 1960"))
}
