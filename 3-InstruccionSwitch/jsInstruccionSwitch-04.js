/*
autor: Gabriel Remon
ejercicio: SWITCH 04
*/


function mostrar()
{
	var mesDelAño;
	var mensaje;
	//Declarando variables
	
	mesDelAño = document.getElementById("txtIdMes").value;
	//Carga de datos

	switch(mesDelAño)
	{		
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		mensaje = "Mes con 30 dias";
		break;
		// meses con 30 dias

		case "Febrero":
			mensaje = "Mes con 28 dias";
		break;

		//mes con 28 dias

		default:
		/*
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		*/
			mensaje = "Mes con 31 dias";
		break;
 		//meses con 31 dias
	} 

	alert(mensaje);
	
	



}