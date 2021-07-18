function mostrar()
{
	var numeroAcumulado;
	var numeroIngresado;
	var contador;
	var mensajeSuma;
	var mensajePromedio;
	var promedio;

	numeroAcumulado=0
	contador=1;

	while(contador<6)
	{
		numeroIngresado=prompt("ingrese el "+contador+"º numero");
		numeroIngresado=parseInt(numeroIngresado);

		numeroAcumulado= numeroAcumulado+numeroIngresado;

		contador++;
	}

	promedio=numeroAcumulado/5;

	mensajeSuma="La suma acumulada es "+numeroAcumulado;
	mensajePromedio= "El promedio de los numeros es "+promedio;

	document.getElementById("txtIdSuma").value=mensajeSuma;
	document.getElementById("txtIdPromedio").value=mensajePromedio;

}//FIN DE LA FUNCIÓN