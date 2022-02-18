function getSecondMin(arr) {
    // arr.sort((a,b) => a - b)
    // let temp = []
    //
    // for (let num of arr) {
    //     if (temp.includes(num)) continue;
    //     else temp.push(num)
    // }
    // console.log(temp)
    // return temp.length > 1 ? temp[1] : temp[0]

    let fm = 12 // Number.MAX_VALUE; //O1 => first min //
    let sm = 13 // Number.MAX_VALUE; // O1 => second min

    for (let curNum of arr) {
        if (curNum < fm) {
            sm = fm
            fm = curNum
        } else if (curNum < sm && curNum !== fm) {
            sm = curNum
        }
    }
    return sm === Number.MAX_VALUE ? fm : sm
}

let arr1 = [12, 13, 1, 10, 34, 1] // 10 // 10000
let arr2 = [1,1,1,1,1,1,1] // 1
console.log(getSecondMin(arr1)) // result => 10
console.log(getSecondMin(arr2)) // result => 10

// const [fn, sn, tn] = arr1
