function isAlienSorted(words: string[], order: string): boolean {
  let alienAlphabet = new Map<string, number>();

  for (let i = 0; i < order.length; i++) {
    let letter = order[i];
    alienAlphabet.set(letter, i);
  }

  for (let j = 0; j < words.length; j++) {
    let currentWord = words[j];
    let prevWord = words[j - 1];

    if (!prevWord) continue;

    for (let k = 0; k < Math.min(currentWord.length, prevWord.length); k++) {
      let prevPos: number = <number>alienAlphabet.get(prevWord[k]);
      let currPos: number = alienAlphabet.get(currentWord[k]) as number;
      let firstLetterOfPrevWord: number = <number>(
        alienAlphabet.get(prevWord[0])
      );
      let firstLetterOfCurrWord = alienAlphabet.get(currentWord[0]) as number;

      if (firstLetterOfPrevWord === firstLetterOfCurrWord) {
        if (prevPos > currPos) return false;
        let pointer = 1;
        while (
          prevWord[pointer] === currentWord[pointer] &&
          pointer <= Math.min(prevWord.length, currentWord.length)
        )
          pointer++;
        if (pointer - 1 === currentWord.length) return true;
        if (!currentWord[pointer]) return false;
      } else if (firstLetterOfPrevWord > firstLetterOfCurrWord) return false;
    }
  }
  return true;
}

isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz');
isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz');
isAlienSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz');
isAlienSorted(['hello', 'hello'], 'abcdefghijklmnopqrstuvwxyz');

// const isAlienSorted = (words, order) => {
//   let charPosition = new Map()
//   for(let position = 0; position < order.length; position++){
//     let char = order[position]
//     charPosition.set(char, position)
//   }
//   for(let i = 1; i < words.length; i++){
//     let prev = words[i-1], curr = words[i]
//     if(charPosition.get(prev[0]) > charPosition.get(curr[0]))return false
//     else if(prev[0] === curr[0]){
//       let pointer = 1
//       while(prev[pointer] === curr[pointer])pointer++
//       if(curr[pointer] === undefined)return false
//       if(charPosition.get(prev[pointer]) > charPosition.get(curr[pointer]))return false
//     }
//   }
//   return true
// };
