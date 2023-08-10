let cantidad = parseInt(prompt(`Ingrese la cantidad de huevos que desea comprar: 
Cada huevo cuesta $250`));
let precio = cantidad*250;

if (cantidad>0 && cantidad<=100) {
    descuento = precio * 0.03;
    alert(`Vas a comprar ${cantidad} huevos con un descuento del 3%.
    El precio final es de $${precio-descuento}`);
} else if (cantidad>100 && cantidad<=200) {
    descuento = precio * 0.05;
    alert(`Vas a comprar ${cantidad} huevos con un descuento del 5%.
    El precio final es de $${precio-descuento}`);
} else if (cantidad>200 && cantidad<=300) {
    descuento = precio * 0.08;
    alert(`Vas a comprar ${cantidad} huevos con un descuento del 8%.
    El precio final es de $${precio-descuento}`);
} else if (cantidad>=300) {
    descuento = precio * 0.10;
    alert(`Vas a comprar ${cantidad} huevos con un descuento del 10%.
    El precio final es de $${precio-descuento}`);
}
