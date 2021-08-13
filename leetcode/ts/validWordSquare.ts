// Input: words = ["abcd","bnrt","crmy","dtye"]
// Output: true
// Explanation:
// The 1st row and 1st column both read "abcd".
// The 2nd row and 2nd column both read "bnrt".
// The 3rd row and 3rd column both read "crmy".
// The 4th row and 4th column both read "dtye".
// Therefore, it is a valid word square.

// Input: words = ["ball","area","read","lady"]
// Output: false
// Explanation:
// The 3rd row reads "read" while the 3rd column reads "lead".
// Therefore, it is NOT a valid word square.

function validWordSquare(words: string[]): boolean {
    let vertical: string[],
        horizontal: string[];

    for (let i = 0; i < words.length; i++) {
        horizontal = words[i].split(''); //?
        vertical = verticalWord(words, i); //?

        if (!horizontal.every((letter, ind) => letter === vertical[ind])) return false;
    }
    return true;
};

function verticalWord(arr: string[], index: number): string[] {
    const word: string[] = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = index; j <= index; j++) {
            word.push(arr[i][j]);
        }
    }
    return word;
}
console.log(validWordSquare(["abcd","bnrt","crmy","dtye"])) //true
console.log(validWordSquare(["ball","area","read","lady"])) //false
console.log(validWordSquare(["abcd","bnrt","crm","dt"]))