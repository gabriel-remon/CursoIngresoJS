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

	numeroTemporal = Math.random();
	numeroRandom = Math.floor( numeroTemporal * 11);
	//creaccion del numero random

	if(numeroRandom >= 9)
	{
		mensaje = "EXELENTE. Su nota es: " + numeroRandom;
	}
	//Se eyecuta con un numero 9 o 10

	else if (numeroRandom >= 4)
	{
		mensaje = "APROBÓ. Su nota es: " + numeroRandom;
	}
	//se eyecuta con numeros del 8 al 4

	else 
	{
		mensaje = "Vamos, la proxima se puede. Su nota es: " + numeroRandom;
	}
	//se eyecuta con numeros menores a 4


	alert(mensaje);
}