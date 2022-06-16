function plus(num) {
  return this + num
}

function minus(num) {
  return this - num
}
Number.prototype.plus = plus
Number.prototype.minus = minus

let a = (2).plus(3).minus(1) // 4
console.log(a)