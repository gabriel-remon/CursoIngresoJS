/*

autor: Remon Gabriel
actuvidad: WHILE 06

*/


function mostrar()
{
	var numeroAcumulado;
	var numeroIngresado;
	var contador;
	var mensajeSuma;
	var mensajePromedio;
	var promedio;

	numeroAcumulado=0
	contador=0;

	while(contador<5)
	{
		contador++;
		numeroIngresado=prompt("ingrese el "+contador+"º numero");
		numeroIngresado=parseInt(numeroIngresado);

		numeroAcumulado= numeroAcumulado+numeroIngresado;

		
	}

	promedio=numeroAcumulado/contador;

	mensajeSuma="La suma acumulada es "+numeroAcumulado;
	mensajePromedio= "El promedio de los numeros es "+promedio;

	document.getElementById("txtIdSuma").value=mensajeSuma;
	document.getElementById("txtIdPromedio").value=mensajePromedio;

}