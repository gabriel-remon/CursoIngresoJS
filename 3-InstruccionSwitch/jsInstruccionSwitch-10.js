/*
autor: Gabriel Remon
ejercicio: 10 - 3
*/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var mensaje;
	var permisoViaje;
	//Declarar variales

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	//carga de datos

	switch(estacionIngresada)
	{
		case "Invierno" :
		switch(destinoIngresado)
		{
			case "Bariloche" :
			permisoViaje = "Se Viaja"
			break;

			case "Cataratas" :
			case "Mar del plata" :
			case "Cordoba":
			permisoViaje = "No se viaja";
		}
		break;
		//Situacion en invierno

		case "Verano" :
		switch(destinoIngresado)
		{
			case "Bariloche" :
			case "Cordoba" :
			permisoViaje = "No se viaja";
			break;

			case "Mar del plata" :
			case "Cataratas" :
			permisoViaje = "Se viaja"
		}
		break;
		//situacion en verano

		case "Otoño" :
		permisoViaje = "Se viaja"
		break;
		//situacion en otoño

		case "Primavera" :
		switch(destinoIngresado)
		{
			case "Bariloche" :
			permisoViaje = "No se viaja";
			break;

			case "Cataratas" :
			case "Cordoba" :
			case "Mar del plata" :
			permisoViaje = "Se viaja";
		}
		//situacion en primavera
	}

	mensaje = "El estado del viaje para el destino "+destinoIngresado+ " en la estacion "+estacionIngresada+ " es: " +permisoViaje;
	//creacion del mensaje final

	alert(mensaje);

}