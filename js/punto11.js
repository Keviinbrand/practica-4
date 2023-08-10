let mes = parseInt(prompt(`Ingrese el mes por número. Siendo Enero el número
1 y así sucesivamente con los otros meses`))

if (mes == 1) {
    alert(`Enero: Capricornio-Acuario`)
} else if (mes == 2) {
    alert(`Febrero: Acuario-Piscis`)
} else if (mes == 3) {
    alert(`Marzo :Piscis-Aries`)
} else if (mes == 4) {
    alert(`Abril: Aries-Tauro`)
} else if (mes == 5) {
    alert(`Mayo: Tauro-Géminis`)
} else if (mes == 6) {
    alert(`Junio: Géminis-Cáncer`)
} else if (mes == 7) {
    alert(`Julio: Cáncer-Leo`)
} else if (mes == 8) {
    alert(`Agosto: Leo-Virgo`)
} else if (mes == 9) {
    alert(`Septiembre: Virgo-Libra`)
} else if (mes == 10) {
    alert(`Octubre: Libra-Escorpio`)
} else if (mes == 11) {
    alert(`Noviembre: Escorpio-Sagitario`)
} else if (mes == 12) {
    alert(`Diciembre: Sagitario-Capricornio`)
} else {
    alert(`Ingresó un número/mes inválido`)
}