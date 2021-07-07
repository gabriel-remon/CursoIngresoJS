/*
autor: Gabriel Remon
ejercicio: 09 - 2
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

	mensaje = "Numero random: "+numeroRandom;
	//Creacion del mensaje

	alert(mensaje);
}