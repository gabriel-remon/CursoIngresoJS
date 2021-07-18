/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numeroIngresado;
	var numeroAcumulado;
	var promedio;
	var mensajeSuma;
	var mensajePromedio;
	var contador;

	contador=0;
	numeroAcumulado=0;

	while(contador<10000)
	{
		numeroIngresado=prompt("ingrese el "+ (contador+1) +"º numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado==null || isNaN(numeroIngresado))
		{
			break;
		}
		else
		{
			contador++;


			numeroAcumulado=numeroAcumulado+numeroIngresado;
		

		}
	}

	promedio=numeroAcumulado/contador;

	mensajeSuma="la suma total es "+numeroAcumulado;
	mensajePromedio="el promedio es "+promedio;

	document.getElementById("txtIdSuma").value=mensajeSuma;
	document.getElementById("txtIdPromedio").value=mensajePromedio;

}//FIN DE LA FUNCIÓN