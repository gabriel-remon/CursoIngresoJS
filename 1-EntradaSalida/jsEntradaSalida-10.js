/*
autor: Gabriel Remon
ejercicio: 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	//Carga de variable
	importe = document.getElementById("txtIdImporte").value;
	//Carga del dato
	resultado = importe * 0.75;
	//Resta del 25%
	document.getElementById("txtIdResultado").value=resultado;
	//Muestra del resultado
}
