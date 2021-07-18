/*
autor: Gabriel Remon
ejercicio: SWITCH 08
*/

function mostrar()
{
	var destinoIngresado;
	var mensaje;
	//Declarando variable

	destinoIngresado = document.getElementById("txtIdDestino").value;
	//carga de dato

	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Hace FRIO";
		break;

		default:
		/*
		case "Mar del plata":
		case "Cataratas":
		*/
			mensaje = "Hace CALOR";
		break;
	}

	alert(mensaje);

}