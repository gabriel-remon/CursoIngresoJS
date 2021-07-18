/*
autor: Gabriel Remon
ejercicio: SWITCH 10
*/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var mensaje;
	var permisoViaje;
	//Declarar variales

	estacionIngresada=document.getElementById("txtIdEstacion").value;
	destinoIngresado=document.getElementById("txtIdDestino").value;
	//carga de datos

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					permisoViaje="Se Viaja"
				break;

				default:
				/*
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":
				*/
					permisoViaje="No se viaja";
				break;
			}
		break;
		//Situacion en invierno

		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
				case "Cordoba":
				permisoViaje = "No se viaja";
				break;
			
				default:
				/*
				case "Mar del plata":
				case "Cataratas":
				*/
					permisoViaje="Se viaja";
				break;
			}
		break;
		//situacion en verano

		case "Otoño":
			permisoViaje="Se viaja";
		break;
		//situacion en otoño

		case "Primavera":
			switch(destinoIngresado)
			{
				case "Bariloche":
				permisoViaje="No se viaja";
				break;

				default:
				/*
				case "Cataratas":
				case "Cordoba":
				case "Mar del plata":
				*/
					permisoViaje="Se viaja";
				break;
			}
		break;
		//situacion en primavera
	}

	mensaje="El estado del viaje para el destino "+destinoIngresado+ " en la estacion "+estacionIngresada+ " es: " +permisoViaje;
	//creacion del mensaje final

	alert(mensaje);

}