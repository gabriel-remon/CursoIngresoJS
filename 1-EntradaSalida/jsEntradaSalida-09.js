/*
autor: Gabriel Remon
ejercicio: 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	//definiendo variables
	
	sueldo = document.getElementById("txtIdSueldo").value;
	//carga de dato
	
	resultado = sueldo*1.1;
	//suma del 10%
	
	document.getElementById("txtIdResultado").value = resultado;
}
