/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 

autor: Remon Gabriel
actuvidad: WHILE 10

*/
function mostrar()
{

	var numeroIngresado;
	var sumaNegativo;
	var sumaPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var bucle;
	var cantidadNumeros;
	var resto;
	var mensaje;

	sumaNegativo=0;
	sumaPositivos=0;
	cantidadPositivos=0;
	cantidadNegativos=0;
	cantidadCeros=0;
	cantidadPares=0;
	bucle=true;
	cantidadNumeros=0;

	while(bucle)
	{
		cantidadNumeros++;
		numeroIngresado=prompt("ingrese el "+cantidadNumeros+"º numero");
		numeroIngresado=parseInt(numeroIngresado);


		if(numeroIngresado==0)
		{
			cantidadCeros++;
		}
		else
		{
			resto=numeroIngresado%2;
			if(resto==0)
			{
				cantidadPares++;
			}

			if(numeroIngresado>0)
			{
				sumaPositivos=sumaPositivos+numeroIngresado;
				cantidadPositivos++;
			}
			else
			{
				sumaNegativo=sumaNegativo+numeroIngresado;
				cantidadNegativos++;

			}
		}

		bucle=confirm("Desea continuar?");
	}

	promedioPositivos=sumaPositivos/cantidadPositivos;
	promedioNegativos=sumaNegativo/cantidadNegativos;
	diferencia=sumaPositivos+sumaNegativo;
	
	mensaje="La suma de los numeros positivos es: "+sumaPositivos+"<br>";
	mensaje=mensaje+"La suma de los numeros negativos es: "+sumaNegativo+"<br>";
	mensaje=mensaje+"Se ingresaron "+cantidadPositivos+" numeros positivos <br>";
	mensaje=mensaje+"Se ingresaron "+cantidadNegativos+" numeros negativos <br>";
	mensaje=mensaje+"Se ingresaron "+cantidadCeros+" ceros <br>";
	mensaje=mensaje+"se ingresaron "+cantidadPares+" numeros pares <br>";
	mensaje=mensaje+"El promedio de los nuemros positivos es: "+promedioPositivos+"<br>";
	mensaje=mensaje+"El promedio de los numeros negativos es: "+promedioNegativos+"<br>";
	mensaje=mensaje+"La diferencia entre positivos y negativos es: "+diferencia;

	document.write(mensaje);

}