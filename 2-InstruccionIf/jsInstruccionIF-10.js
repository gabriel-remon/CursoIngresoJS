/*
autor: Gabriel Remon
ejercicio: 10 - 2
*/


function mostrar()
{
	var numeroRandom;
	var numeroTemporal;
	var mensaje;
	//definiendo variables

	numeroTemporal=Math.random();
	numeroRandom=Math.floor(numeroTemporal * 10) + 1;
	//creaccion del numero random

	if(numeroRandom>8)
	{
		mensaje="EXELENTE. Su nota es: " + numeroRandom;
	}
	//Se eyecuta con un numero 9 o 10

	else 
	{
		if(numeroRandom>3)
		{
			mensaje="APROBÓ. Su nota es: " + numeroRandom;
		}
		//se eyecuta con numeros del 8 al 4

		else 
		{
			mensaje="Vamos, la proxima se puede. Su nota es: " + numeroRandom;
		}
		//se eyecuta con numeros menores a 4
	}

	alert(mensaje);
}