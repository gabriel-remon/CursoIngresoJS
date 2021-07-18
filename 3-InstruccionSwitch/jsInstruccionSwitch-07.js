/*
autor: Gabriel Remon
ejercicio: SWITCH 07
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
		case "Bariloche":
			mensaje = "Se encuentra en el punto cardinal Oeste";
		break;

		case "Cataratas":
			mensaje = "Se encuentra en el punto cardinal Norte";
		break

		case "Mar del plata":
			mensaje = "Se encuentra en el punto cardinal Este";
		break;

		case "Ushuaia":
			mensaje = "Se encuentra en el punto cardinal Sur";
		break;
	}

	alert(mensaje);

}