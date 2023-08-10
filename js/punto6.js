let numHombres = parseInt(prompt(`Ingrese la cantidad de estudiantes masculinos`));
let numMujeres = parseInt(prompt(`Ingrese la cantidad de estudiantes femeninas`));

let totalAlumnos = numHombres + numMujeres;

let porcentajeMujeres = (numMujeres * 100) / totalAlumnos;
let porcentajeHombres = (numHombres * 100) / totalAlumnos

alert(`El porcentaje de estudiantes masculinos es: ${parseInt(porcentajeHombres)}%.
El porcentaje de estudiantes femeninas es: ${parseInt(porcentajeMujeres)}%.
El total de alumnos es: ${totalAlumnos}`)