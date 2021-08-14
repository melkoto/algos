function allCellsDistOrder(rows: number, cols: number, rCenter: number, cCenter: number): number[][] {
    let res: number[][] = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            res.push([Math.abs(rCenter - i), Math.abs(j - cCenter)])
        }
    }
    return res.sort((a, b) => b[1] - a[1]);
}

console.log(allCellsDistOrder(2,2,0,1))
console.log(allCellsDistOrder(2,3,1,2))
