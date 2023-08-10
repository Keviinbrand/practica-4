let mes = parseInt(prompt(`Ingrese el mes por número. Siendo Enero el número
1 y así sucesivamente con los otros meses`))

if (mes == 1) {
    alert(`Enero tiene 31 días`)
} else if (mes == 2) {
    alert(`Febrero tiene 28 o 29 días. Depende si es año bisiesto o no`)
} else if (mes == 3) {
    alert(`Marzo tiene 31 días`)
} else if (mes == 4) {
    alert(`Abril tiene 30 días`)
} else if (mes == 5) {
    alert(`Mayo tiene 31 días`)
} else if (mes == 6) {
    alert(`Junio tiene 30 días`)
} else if (mes == 7) {
    alert(`Julio tiene 31 días`)
} else if (mes == 8) {
    alert(`Agosto tiene 31 días`)
} else if (mes == 9) {
    alert(`Septiembre tiene 30 días`)
} else if (mes == 10) {
    alert(`Octubre tiene 31 días`)
} else if (mes == 11) {
    alert(`Noviembre tiene 30 días`)
} else if (mes == 12) {
    alert(`Diciembre tiene 31 días`)
} else {
    alert(`Ingresó un número/mes inválido`)
}