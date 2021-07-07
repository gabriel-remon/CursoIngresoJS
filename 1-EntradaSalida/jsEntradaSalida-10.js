/*
autor: Gabriel Remon
ejercicio: 10 bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var descuento;
	//Carga de variable
	
	importe = document.getElementById("txtIdImporte").value;
	descuento = prompt("Ingrese el porcentaje de descuento");
	//Carga del dato

	descuento = parseInt(descuento);
	importe = parseInt(importe);
	//Transformacion de texto a numero 
	
	descuento = descuento/100;
	resultado = importe - (importe * descuento);
	//Descuento del porcentaje ingrasado
	
	document.getElementById("txtIdResultado").value=resultado;
	//Muestra del resultado
}
