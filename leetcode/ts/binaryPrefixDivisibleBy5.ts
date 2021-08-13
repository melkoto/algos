function prefixesDivBy5(nums: number[]): boolean[] {
  let result: boolean[] = [];
  let current = 0;

  nums.forEach((bit) => {
    current <<= 1;
    current += bit;
    result.push(current % 5 === 0);
  });

  return result;
}

prefixesDivBy5([0, 1, 1]);
