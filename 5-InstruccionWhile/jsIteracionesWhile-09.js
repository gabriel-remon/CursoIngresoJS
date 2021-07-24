/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.

autor: Remon Gabriel
actuvidad: WHILE 09

*/
function mostrar()
{


	var numeroIngresado;
	var seguir;
	var maximo;
	var minimo;
	var contador;
	var mensajeMaximo;
	var mensajeMinimo;
	var posicion;
	var cantidadNegativos;

	//primerIngreso=true;


	while(contador<10)
	{
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado<minimo || contador==0)
		{
			minimo=numeroIngresado;
			posicion=contador+1;
		}

		if(numeroIngresado<0)
		{
			if(primerIngreso>maximo || cantidadNegativos==0)
			{
				maximo=primerIngreso;
				posicion=contador+1;
			}

			cantidadNegativos++;
		}
		
		contador++;
	
		seguir=confirm("Desea continuar?");
	}


}
