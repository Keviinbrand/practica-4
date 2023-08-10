let producto = parseInt(prompt(`¿Que vas a comprar?
1. Carro
2. Moto
3. Bicicleta
4. Patineta
5. Scooter Eléctrico`));

let precioProducto = parseFloat(prompt(`Ingrese el valor del poducto que escogiste`));



if (producto == 1 || producto == 2) {
    descuento = precioProducto - (precioProducto * 0.15)
    alert(`Escogiste carro/moto con un valor de $${precioProducto} que tiene un descuento del 15%.
    El precio final con el descuento aplicado es: $${descuento}`)
} else if (producto == 3 || producto == 4) {
    descuento = precioProducto - (precioProducto * 0.10)
    alert(`Escogiste bicicleta/patineta con un valor de $${precioProducto} que tiene un descuento del 10%.
    El precio final con el descuento aplicado es: $${descuento}`)
} else if (producto == 5) {
    descuento = precioProducto - (precioProducto * 0.05)
    alert(`Escogiste scooter eléctrico con un valor de $${precioProducto} que tiene un descuento del 5%.
    El precio final con el descuento aplicado es: $${descuento}`)
}else {
    alert(`Escogiste un producto invalido`)
}        