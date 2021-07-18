/*
autor: Gabriel Remon
ejercicio: SWITCH 02
*/


function mostrar()
{
	var mesDelAño;
	var mensaje;
	//Declarando variable

	mesDelAño = document.getElementById("txtIdMes").value;
	//carga de dato

	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio";
		break;

		case "Marzo":
		case "Abril": 
		case "Mayo":
		case "Junio":
			mensaje = "Falta para el invierno";
		break;

		default:
		/*
		case "Enero":
		case "Febrero":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		*/
			mensaje = "Ya pasamos el frio, ahora calor!!!";
		break;
	}

	alert(mensaje);



}//FIN DE LA FUNCIÓN