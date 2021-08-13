// Решение (Solution) https://www.youtube.com/watch?v=QrvnqpDexEY

function divide(dividend: number, divisor: number): number {
    const MAX_INT = 2147483647;
    const MIN_INT = -2147483648;
    const HALF_MIN_INT = -1073741824; // MIN_INT / 2

    if (dividend === MIN_INT && divisor === -1) return MAX_INT;

    let quotient = 0;
    let negatives = 2;

    if (dividend > 0) {
        negatives--;
        dividend = -dividend;
    }

    if (divisor > 0) {
        negatives--;
        divisor = -divisor;
    }

    const doubles: number[] = [];
    const powersOfTwo: number[] = [];

    let powerOfTwo = 1;

    while (divisor >= dividend) {
        doubles.push(divisor);
        powersOfTwo.push(powerOfTwo);

        if (divisor < HALF_MIN_INT) break;

        divisor += divisor;
        powerOfTwo += powerOfTwo;
    }

    for (let i = doubles.length - 1; i >= 0; i--) {
        if (doubles[i] >= dividend) {
            quotient += powersOfTwo[i];
            dividend -= doubles[i];
        }
    }

    return negatives === 1 ? -quotient : quotient;
};
