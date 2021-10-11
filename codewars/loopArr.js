function loopArr(arr, direction, steps) {
  if (direction === 'right') {
    let e = arr.splice(-steps)
    let b = arr.splice(0, steps);
    return [...e, ...b, ...arr]
  } else {
    let b = arr.splice(0, steps);
    let e = arr.splice(-steps)
    return [...arr, ...e, ...b]
  }
}

console.log(loopArr([1, 5, 87, 45, 8, 8], 'left', 2)); // [87, 45, 8, 8, 1, 5]
console.log(loopArr([1, 5, 87, 45, 8, 8], 'right', 2)); // [8, 8, 1, 5, 87, 45]
console.log(loopArr([191,352,705,672,219,683,534,786,836,192,504,675,348,692,913,18,597,886,778,471,299], 'right', 20))