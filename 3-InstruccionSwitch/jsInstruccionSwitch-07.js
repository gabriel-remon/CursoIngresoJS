/*
autor: Gabriel Remon
ejercicio: 07 - 3
*/


function mostrar()
{
	var destinoIngresado;
	var mensaje;
	//declarando varialbes

	destinoIngresado = document.getElementById("txtIdDestino").value;
	//carga de datos

	switch(destinoIngresado)
	{
		case "Bariloche" :
		mensaje = "Se encuentra punto cardinal Oeste";
		break;

		case "Cataratas" :
		mensaje = "Se encuentra punto cardinal Norte";
		break

		case "Mar del plata" :
		mensaje = "Se encuentra punto cardinal Este";
		break;

		case "Ushuaia" :
		mensaje = "Se encuentra punto cardinal Sur";
	}

	alert(mensaje);

}