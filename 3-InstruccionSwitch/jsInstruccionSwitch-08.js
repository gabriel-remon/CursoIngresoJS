/*
autor: Gabriel Remon
ejercicio: 08 - 3
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
		case "Bariloche" :
		case "Ushuaia" :
		mensaje = "Hace FRIO";
		break;

		case "Mar del plata" :
		case "Cataratas" :
		mensaje = "Hace CALOR";
	
	}

	alert(mensaje);

}