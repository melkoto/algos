/**
 * @param {number[][]} intervals
 * @return {number}
 */
const removeCoveredIntervals = function(intervals) {
  intervals.sort((a, b) => {
    return a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]
  })

  let count = 0
  let end = 0
  let prevEnd = 0

  for (let interval of intervals) {
    end = interval[1]
    if (prevEnd < end) {
      count++
      prevEnd = end
    }
  }
  return count
}

console.log(removeCoveredIntervals([[1,4],[3,6],[2,8]]))
