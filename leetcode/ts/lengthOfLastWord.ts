function lengthOfLastWord(s: string): number {
  let trimStr = s.trim();
  if (!trimStr) return 0;

  let splitStr = trimStr.split(' ');
  return splitStr[splitStr.length - 1].length
};

lengthOfLastWord("Hello world");
lengthOfLastWord(' ');
lengthOfLastWord('a ');
