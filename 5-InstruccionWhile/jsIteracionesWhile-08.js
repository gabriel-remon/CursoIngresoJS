/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var suma;
	var multiplicacion;
	var contador;
	var mensajeSuma;
	var mensajeMultiplicacion;

	suma=0;
	multiplicacion=0;
	contador=1;

	while(contador<10000)
	{
		numeroIngresado=prompt("ingrese el "+contador+"º numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado==null || isNaN(numeroIngresado))
		{
			break;
		}
		else
		{
			contador++;

			if (numeroIngresado<0)
			{
				if(multiplicacion==0)
				{
					multiplicacion=numeroIngresado*(-1);
				}

				else
				{
				numeroIngresado=numeroIngresado*(-1);
				multiplicacion=numeroIngresado*multiplicacion;	
				}
				
			}
			else
			{
				suma=suma+numeroIngresado;
			}

		}

	}

	mensajeSuma="La suma total es "+suma;
	mensajeMultiplicacion="La multipliacaion es "+multiplicacion;

	document.getElementById("txtIdSuma").value=mensajeSuma;
	document.getElementById("txtIdProducto").value=mensajeMultiplicacion;

}//FIN DE LA FUNCIÓN