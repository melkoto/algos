// const list = [1, 3, 4, 5, 7, 10];

function binarySearch(list, element) {
  // code
  let p1 = 0, p2 = list.length -1, mid

  while (p1 <= p2) {
    mid = p1 + p2 >>> 1
    console.log(mid)

    if (list[mid] === element) return mid
    else if (list[mid] > element) p2 = mid -1
    else if (list[mid] < element) p1 = mid + 1
  }
  return -1
}