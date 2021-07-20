/*
autor: Gabriel Remon
ejercicio: SWITCH 09
*/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var porcentaje;
	var bonificacion;
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
					porcentaje=20;
				break;

				case "Mar del plata":
					porcentaje=-20;
				break;

				default:
				/*
				case "Cataratas":
				case "Cordoba" :
				*/
					porcentaje=-10;
				break;
			}
		break;
		//situacion en invierno

		case "Verano" :
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje=-20;
				break;

				case "Mar del plata":
					porcentaje=20;
				break;

				default:
				/*
				case "Cataratas" :
				case "Cordoba" :
				*/
					porcentaje=10;
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
					porcentaje=0;
				break;

				default:
				/*
				case "Bariloche":
				case "Cataratas" :
				case "Mar del plata":
				*/
					porcentaje=10;
				break; 
			}
		break;
		//situacion en otoño y primavera
	}

	bonificacion=precioBase*(porcentaje/100);
	precioFinal=bonificacion+precioBase;

	mensaje="El destino "+destinoIngresado+" se encuentra con un "+porcentaje+"% y el precio final es $"+precioFinal;
	//creacion del mensaje final

	alert(mensaje);

}
