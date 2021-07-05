/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var a;
	a=txtIdImporte.value;
	a=a*0.75;
	document.getElementById("txtIdResultado").value=a;
}
