/*
alumno: Gabriel remon
ejercicio : parcial 2019 03
*/

function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;
	var precioFinal;
	var mensaje;

	precio = prompt("Ingrese el valor del producto");
	precio = parseInt(precio);

	porcentaje = prompt("Ingrese el porcentaje de descuento");
	porcentaje = parseInt(porcentaje);

	descuento = porcentaje/100;
	descuento = precio * descuento;

	precioFinal = precio - descuento;

	mensaje = "El precio final es de $" + precioFinal + ". Este tiene un descuento de $" + descuento + "( " + porcentaje + "% de descuento)";

	document.getElementById("elPrecioFinal").value = mensaje;

}
 