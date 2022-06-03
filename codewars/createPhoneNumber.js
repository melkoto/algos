function createPhoneNumber(numbers){
  let phoneNumber = ""

  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      phoneNumber += '('
    } else if (i === 3) {
      phoneNumber += ') '
    } else if (i === 6) {
      phoneNumber += '-'
    }

    phoneNumber += numbers[i]
  }
  return phoneNumber
}

console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
