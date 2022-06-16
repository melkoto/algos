function canGetCount(n) {

  return function() {
    n--
    return n < 0 ? 'no' : 'yes'
  }
}


const getOne = canGetCount(2);

getOne()  // yes
getOne()  // yes
getOne()  // no