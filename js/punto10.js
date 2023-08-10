let eleccion = prompt("Ingrese una opción: \n 1. Suma \n 2. Resta \n 3. Multiplicación \n 4. División");
let num1 = parseInt(prompt("Ingrese el primer número"));
let num2 = parseInt(prompt("Ingrese el segundo número"));
let resultado = 0;

switch (eleccion) {
    case "1": resultado = num1 + num2
    alert("El resultado de la suma es: " + resultado);
        break;  
    case "2": resultado = num1 - num2
    alert("El resultado de la resta es: " + resultado);
        break;
    case "3": resultado = num1 * num2
    alert("El resultado de la multiplicación es: " + resultado);
        break;
    case "4": resultado = num1 / num2
    alert("El resultado de la división es: " + resultado);
        break;
    default: alert("Opción incorrecta");

}