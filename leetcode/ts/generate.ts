function generate(numRows: number): number[][] {
    const container: number[][] = [[1]];
    for (let i = 1; i < numRows; i++){
        container.push(new Array(i).fill(0));
        container[i][0] = 1;
        container[i][i] = 1;
    }

    for (let i = 2; i < numRows; i++) {
        let sum = 0;
        for (let j = 1; j < i; j++) {
            for (let k = j - 1; k <= j; k++) {
                sum += container[i - 1][k];
            }
            container[i][j] = sum;
            sum = 0;
        }
    }

    return container;
}
