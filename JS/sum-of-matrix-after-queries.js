function matrixSumQueries(n, queries) {
    let row = Array.from({length: n}, () => [0, -1])
    let col = Array.from({length: n}, () => [0, -1])
    
    queries.forEach((query, i) => {
        const [currType, index, val] = query
        
        if(currType === 0) {
            row[index] = [val, i];
        } else {
            col[index] = [val, i];
        }
    });
    
    let sum = 0;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            sum += row[i][1] > col[j][1] ? row[i][0] : col[j][0];
        }
    }
    
    return sum;
}

console.log(matrixSumQueries(3, [[0, 0, 1], [1, 2, 2], [0, 2, 3], [1, 0, 4]]));  // should return 23
console.log(matrixSumQueries(3, [[0, 0, 4], [0, 1, 2], [1, 0, 1], [0, 2, 3], [1, 2, 1]]));  // should return 17
