// palindrome('racecar') === true
// palindrome('table') === false

const palindrome = (str) => {
  // ...
  let p1 = 0, p2 = str.length - 1

  if (str.length % 2 === 0) {
    while (p1 < p2) {
      if (str[p1++] !== str[p2--]) return false
    }
  } else {
    while (p1 <= p2) {
      if (str[p1] !== str[p2]) return false
    }
  }
  return true
};