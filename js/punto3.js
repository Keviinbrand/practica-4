let num1 = parseInt(prompt('Ingrese el primer número'));
let num2 = parseInt(prompt('Ingrese el segundo número'));
let num3 = parseInt(prompt('Ingrese el tercer número'));

if ( num1 > num2 && num1 > num3) {
    alert(`El primer número ingresado: ${num1}, es mayor que los demás`)
} else if ( num2 > num1 && num2 > num3) {
    alert(`El segundo número ingresado: ${num2}, es mayor que los demás`)
} else if ( num3 > num1 && num3 > num2) {
    alert(`El tercer número ingresado: ${num3}, es mayor que los demás`)
}