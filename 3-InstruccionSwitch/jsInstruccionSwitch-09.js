/*
autor: Gabriel Remon
ejercicio: SWITCH 09
*/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var aumento;
	var aumentotxt;
	var precioBase;
	var precioFinal;
	var mensaje;
	//Declarar variables

	precioBase=15000;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	//carga de datos

	switch(estacionIngresada)
	{
		case "Invierno" :
			switch(destinoIngresado)
			{
				case "Bariloche":
					aumento = 1.2;
					aumentotxt = "con un 20% de aumento ";
				break;

				case "Mar del plata":
					aumento = 0.8;
					aumentotxt = "con un 20% de descuento ";
				break;

				default:
				/*
				case "Cataratas":
				case "Cordoba" :
				*/
					aumento = 0.9;
					aumentotxt = "con un 10% de descuento ";
				break;
			}
		break;
		//situacion en invierno

		case "Verano" :
			switch(destinoIngresado)
			{
				case "Bariloche":
					aumento = 0.8;
					aumentotxt = "con un 20% de descuento ";
				break;

				case "Mar del plata":
					aumento = 1.2;
					aumentotxt = "con un 20% de aumento ";
				break;

				default:
				/*
				case "Cataratas" :
				case "Cordoba" :
				*/
					aumento = 1.1;
					aumentotxt = "con un 10% de aumento ";
				break;
			}
		break;
		//situacin en verano

		default:
		/*
		case "Otoño":
		case "Primavera":
		*/
			switch(destinoIngresado)
			{
				case "Cordoba" :
					aumento = 1;
					aumentotxt = "sin descuento ";
				break;

				default:
				/*
				case "Bariloche":
				case "Cataratas" :
				case "Mar del plata":
				*/
					aumento = 1.1;
					aumentotxt = "con un 10% de aumento ";
				break; 
			}
		break;
		//situacion en otoño y primavera
	}

	precioFinal=precioBase*aumento;
	//formula de aumento o descuento de precios

	mensaje="El destino "+destinoIngresado+" esta "+aumentotxt+"y el precio final es $"+precioFinal;
	//creacion del mensaje final

	alert(mensaje);

}
