/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.

autor: Remon Gabriel
actuvidad: WHILE 09

*/
function mostrar()
{
	var numeroMaximo;
	var numeroMinimo;
	var mensajeMaximo;
	var mensajeMinimo;
	var numeroIngresado;
	var contador;
	var cantidadNumeros;

	contador=0;
	cantidadNumeros=0;

	while(contador==0)
	{
		cantidadNumeros++;
		numeroIngresado=prompt("ingrese el "+cantidadNumeros+"º numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(isNaN(numeroIngresado) || numeroIngresado==null)
		{
			contador=1;
		}
		else
		{
			if (cantidadNumeros==1)
			{
				numeroMaximo=numeroIngresado;
				numeroMinimo=numeroMaximo;
			}
			else
			{
				if(numeroIngresado>numeroMaximo)
				{
					numeroMaximo=numeroIngresado;
				}
				else
				{
					if (numeroIngresado<numeroMinimo)
					{
						numeroMinimo=numeroIngresado;
					}
				}
			}
		}
	}

	mensajeMaximo="El numero con mayor valor ingresado es: "+numeroMaximo;
	mensajeMinimo="El numero con menor valor ingresado es: "+numeroMinimo;

	document.getElementById("txtIdMaximo").value=mensajeMaximo;
	document.getElementById("txtIdMinimo").value=mensajeMinimo;


}