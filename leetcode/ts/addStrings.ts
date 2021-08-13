// Решение https://youtu.be/FJBa0E9_ZaQ
function addStrings(num1: string, num2: string): string {
  let result = '';
  let carry = 0;

  let num1Last = num1.length - 1;
  let num2Last = num2.length - 1;

  while (num1Last >= 0 || num2Last >= 0) {
    let tempSum = 0;
    let first = num1Last >= 0 ? Number(num1[num1Last]) : 0;
    let second = num2Last >= 0 ? Number(num2[num2Last]) : 0;

    tempSum += first + second + carry;
    carry = 0;
    num1Last--;
    num2Last--;

    if (tempSum > 9) {
      tempSum %= 10; // tempSum = tempSum % 10;
      carry++;
    }
    result = tempSum + result;
  }

  if (carry > 0) {
    result = carry + result;
  }
  return result;
}

addStrings('456', '77');
