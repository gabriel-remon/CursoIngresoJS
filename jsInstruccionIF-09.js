function mostrar()
{	
	var randomFinal;
	var randomTemporal;
	var mensaje;
	randomTemporal = Math.random();
	randomFinal = Math.floor( randomTemporal * 11);
	mensaje = "Numero random "+ randomFinal;
	alert(mensaje);
}//FIN DE LA FUNCIÓN