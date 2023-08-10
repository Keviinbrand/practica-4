let dia = parseInt(prompt(`Ingrese un dia de la semana.
Siendo 1 el lunes y 7 el domingo`));

switch (dia) {
    case 1: alert(`El dia ${dia} es lunes`);
        break;
    case 2: alert(`El dia ${dia} es martes`);   
        break;
    case 3: alert(`El dia ${dia} es miercoles`);    
        break;
    case 4: alert(`El dia ${dia} es jueves`);
        break;
    case 5: alert(`El dia ${dia} es viernes`);
        break;
    case 6: alert(`El dia ${dia} es sabado`);
        break;
    case 7: alert(`El dia ${dia} es domingo`);
        break;
    default: alert(`El dia ${dia} no es valido`);
}
