// fizzBuzz(6) => [0, 1, 2, fizz, 4, buzz, fizz]

const fizzBuzz = num => {
  let res = []
  for (let i = 0; i <= num; i++) {
    if (i === 0) {
      res.push(i)
      continue
    }
    if (i % 3 === 0 && i % 5 === 0) {
      res.push("fizzbuzz")
    }
    else if (i % 3 === 0) {
      res.push("fizz")
    }
    else if (i % 5 === 0) {
      res.push("buzz")
    }
    else {
      res.push(i)
    }
  }
  return res
}