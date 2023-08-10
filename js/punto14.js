let peso = parseFloat(prompt("Digite su peso: "));
let altura = parseFloat(prompt("Digite su altura: "));

let imc = peso / (altura * altura);

if (imc < 18.5) {
    alert(`Bajo de peso: ${imc} IMC`);
} else if (imc >= 18.5 && imc <= 24.9) {
    alert(`Normal: ${imc} IMC`);
} else if (imc >= 25 && imc <= 29.9) {
    alert(`Sobrepeso: " ${imc} IMC`);
} else if (imc >= 30 && imc <= 34.9) {
    alert(`Obesidad grado 1: ${imc} IMC`);
} else if (imc >= 35 && imc <= 39.9) {
    alert(`Obesidad grado 2: ${imc} IMC`);
} else if (imc >= 40) {
    alert("Obesidad grado 3" + imc);
} else {
    alert("Error");
}