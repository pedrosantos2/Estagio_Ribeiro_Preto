function fibonacci(n) {
    let a = 0, b = 1;
    while (b < n) {
        [a, b] = [b, a + b];
    }
    return b === n;
}

const numeroVerificar = 25;

if (fibonacci(numeroVerificar)) {
    console.log(`O número ${numeroVerificar} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numeroVerificar} não pertence à sequência de Fibonacci.`);
}
