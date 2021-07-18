/*
autor: Gabriel Remon
ejercicio: SWITCH 01
*/

function mostrar()
{
	var mesDelAño;
	var mensaje;
	//Declarando variables

	mesDelAño = document.getElementById("txtIdMes").value;
	//carga de dato

	switch(mesDelAño)
	{
		case "Enero":
			mensaje = "que comience bien el año!!";
		break;

		case "Marzo":
			mensaje = "a clases!!!"
		break;

		case "Julio":
			mensaje = "se vienen las vacaciones!!!";
		break;

		case "Diciembre":
			mensaje = "Felices fiestas!!!"
		break;

		default:
			mensaje="Este mes no tiene eventos importantes";
		break;
	}
	
	alert(mensaje);



}