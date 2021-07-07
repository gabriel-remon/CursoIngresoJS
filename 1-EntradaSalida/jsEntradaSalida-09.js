/*
autor: Gabriel Remon
ejercicio: 09 bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var porcentaje;
	//definiendo variables
	
	sueldo = document.getElementById("txtIdSueldo").value;
	porcentaje = prompt("Ingrese el porcentaje a aumentar");
	//carga de dato
	
	sueldo = parseInt(sueldo);
	porcentaje = parseInt(porcentaje);
	//Transforamacion de texto a numero

	porcentaje = (porcentaje/100)+1; 
	resultado = sueldo * porcentaje;
	//suma del pocentaje
	
	document.getElementById("txtIdResultado").value = resultado;
}
