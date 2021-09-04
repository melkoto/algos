const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 113, 116];

function bs(arr, target) {
  // 113
  let p1 = 0;
  let p2 = arr.length - 1;
  let mid;

  while (p1 <= p2) {
    mid = Math.floor((p1 + p2) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) p1 = mid + 1;
    else if (arr[mid] > target) p2 = mid - 1;
  }
  return -1;
}

console.log(bs(arr1, 5));
