let precioProducto = parseInt(prompt('Ingrese el precio del producto'));
let porcentaje = parseFloat(prompt(`¿Que porcentaje deseas calcular? Pon solo números enteros`));

let calcularPorcentaje = precioProducto * (porcentaje / 100);

alert(`El ${porcentaje}% de ${precioProducto} es: ${calcularPorcentaje}`)