let edad = parseInt(prompt("Ingrese su edad"));
let promedio = parseFloat(prompt("Ingrese su promedio. Debe ser un número entre 0 y 10"));

function mayorDeEdad(){
    if (promedio >= 9) {
        alert(`Su beca será de $200.000`);
    } else if (promedio >= 7.5) {
        alert(`Su beca será de $100.000`);
    } else if ( promedio >= 6) {
        alert(`Su beca será de $50.000`);
    } else {
        alert(`Te invitamos a que te esfuerces más para el próximo año`);
    }
}

function menoresDeEdad(){
    if (promedio >= 9) {
        alert(`Su beca será de $300.000`);
    } else if (promedio < 9 && promedio >= 8) {
        alert(`Su beca será de $200.000`);
    } else if (promedio < 8 && promedio >= 6) {
        alert(`Su beca será de $100.000`);
    } else {
        alert(`Te invitamos a que te esfuerces más para el próximo año`);
    }
}