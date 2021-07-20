/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.

autor: Remon Gabriel
actuvidad: WHILE 08

*/



function mostrar()
{
	var numeroIngresado;
	var suma;
	var multiplicacion;
	var contador;
	var mensajeSuma;
	var mensajeMultiplicacion;
	var cantidadNumeros;

	cantidadNumeros=0;
	suma=0;
	multiplicacion=0;
	contador=0;

	while(contador==0)
	{
		cantidadNumeros++;
		numeroIngresado=prompt("ingrese el "+cantidadNumeros+"º numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado==null || isNaN(numeroIngresado))
		{
			contador=1;
		}
		else
		{

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

}