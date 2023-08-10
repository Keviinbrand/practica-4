let num1 = parseInt(prompt('Ingrese el primer número'));
let num2 = parseInt(prompt('Ingrese el segundo número'));

let resultado = num1 + num2;

if (resultado < 0) {
    alert(`Tu resultado es negativo: ${resultado}`)
} else if (resultado === 0) {
    alert(`Tu resultado es igual a ${resultado}`)
} else if (resultado > 0) {
    alert(`Tu resultado es positivo: ${resultado}`)
}