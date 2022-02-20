function getSecondMax (arr) {
    let fm = Number.MIN_VALUE;  // first min
    let sm = Number.MIN_VALUE; // second min
    for (let curNum of arr) {
        if (curNum > fm) {
            sm = fm
            fm = curNum
        } else if (curNum > sm && curNum !== fm) {
            sm = curNum
        }
    }
    return sm === Number.MIN_VALUE ? fm : sm
}


let arr1 = [ 12, 35, 1, 10, 34, 1 ]
let arr2 = [1,1,1,1,1,1,1] // 1
console.log(getSecondMax(arr1))
console.log(getSecondMax(arr2))
