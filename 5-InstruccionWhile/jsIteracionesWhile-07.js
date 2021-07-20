/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.

autor: Remon Gabriel
actuvidad: WHILE 07

*/


function mostrar()
{
	var numeroIngresado;
	var numeroAcumulado;
	var promedio;
	var mensajeSuma;
	var mensajePromedio;
	var contador;
	var cantidadNumeros;

	contador=0;
	numeroAcumulado=0;
	cantidadNumeros=0;

	while(contador==0)
	{
		numeroIngresado=prompt("ingrese el "+ (cantidadNumeros+1) +"º numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado==null || isNaN(numeroIngresado))
		{
			contador=1;
		}
		else
		{
			cantidadNumeros++;


			numeroAcumulado=numeroAcumulado+numeroIngresado;
		

		}
	}

	promedio=numeroAcumulado/cantidadNumeros;

	mensajeSuma="la suma total es "+numeroAcumulado;
	mensajePromedio="el promedio es "+promedio;

	document.getElementById("txtIdSuma").value=mensajeSuma;
	document.getElementById("txtIdPromedio").value=mensajePromedio;

}//FIN DE LA FUNCIÓN