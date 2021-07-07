/*
autor: Gabriel Remon
ejercicio: 09 - 3
*/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var aumento;
	var aumentotxt;
	var precioFinal;
	var mensaje;
	//Declarar variables

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

			case "Cataratas":
			case "Cordoba" :
			aumento = 0.9;
			aumentotxt = "con un 10% de descuento ";
			break;
			
			case "Mar del plata":
			aumento = 0.8;
			aumentotxt = "con un 20% de descuento ";

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

			case "Cataratas" :
			case "Cordoba" :
			aumento = 1.1;
			aumentotxt = "con un 10% de aumento ";
			break;

			case "Mar del plata":
			aumento = 1.2;
			aumentotxt = "con un 20% de aumento ";

		}
		break;
		//situacin en verano

		case "Otoño":
		case "Primavera":
		switch(destinoIngresado)
		{
			case "Bariloche":
			case "Cataratas" :
			case "Mar del plata":
			aumento = 1.1;
			aumentotxt = "con un 10% de aumento ";
			break; 

			case "Cordoba" :
			aumento = 1;
			aumentotxt = "sin descuento ";
		
		}
		//situacion en otoño y primavera
	}

	precioFinal = 15000* aumento;
	//formula de aumento o descuento de precios

	mensaje = "Destino ingresado esta " + aumentotxt + "y el precio final es $" +precioFinal;
	//creacion del mensaje final

	alert(mensaje);

}