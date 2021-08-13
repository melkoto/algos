function plusOne(digits: number[]): number[] {
  // let num = +digits.join('');
  // let one = 1;
  // while (num & one) {
  //   num ^= one;
  //   one <<= 1;
  // }
  // num ^= one;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits
    }
  }
  digits.unshift(1);
  return digits;
};

plusOne([1,2,3]);
plusOne([1,2,9]);
plusOne([9,8,7,6,5,4,3,2,1,0]);
plusOne([9,9,9]);
