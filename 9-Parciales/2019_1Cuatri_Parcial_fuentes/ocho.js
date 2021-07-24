/*
 Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7) 

*/
function mostrar()
{
	var numerosPares;
	var numerosImpares;
	var cantidadCeros;
	var sumaPositivos
	var cantidadPositivos;
	var promedioPositivos;
	var sumaNegativos;
	var numeroMaximo;
	var numeroMinimo;
	var letraMaxima;
	var letraMinima
	var numeroIngresado;
	var letraIngresada;
	var contador;
	var mensaje;
	var resto;
	var cantidadNumeros;

	 contador=0;
	 numerosPares=0;
	 numerosImpares=0;
	 cantidadCeros=0;
	 sumaNegativos=0;
	 cantidadPositivos=0;
	 sumaPositivos=0;
	 cantidadNumeros=0;

	while(contador==0)
	{
		cantidadNumeros++;
	 	letraIngresada=prompt("Ingrese una letra o apriete cancelar par salir");
	 	
	 	if(letraIngresada==null)
	 	{
	 		break;
	 	}

	 	numeroIngresado=prompt("Ingrese el "+cantidadNumeros+" º numero (entre el -100 y el 100)");
	 	numeroIngresado=parseInt(numeroIngresado);
	 	while(!(numeroIngresado>-101 && numeroIngresado<101))
	 	{
	 		numeroIngresado=prompt("Erro, ingrese un nemero entre el -100 y el 100");
	 		numeroIngresado=parseInt(numeroIngresado);
	 	}

	 	if(numeroIngresado==0)
	 	{
	 		cantidadCeros++;
	 	}
	 	else
	 	{
	 		resto=numeroIngresado%2;
	 		if(resto==0)
	 		{
	 			numerosPares++;
	 		}
	 		else
	 		{
	 			numerosImpares++;
	 		}
	 	}
	 	//numeros pares o impares

	 	if(numeroIngresado>0)
	 	{
	 		cantidadPositivos++;
	 		sumaPositivos=sumaPositivos+numeroIngresado;
	 	}
	 	else
	 	{
	 		sumaNegativos=sumaNegativos+numeroIngresado;
	 	}
	 	//suma de negativos o positivos

	 	if(cantidadNumeros==1)
	 	{
	 		numeroMinimo=numeroIngresado;
	 		numeroMaximo=numeroIngresado;
	 		letraMinima=letraIngresada;
	 		letraMaxima=letraIngresada;

	 	}
	 	else
	 	{
	 		if(numeroIngresado>numeroMaximo)
	 		{
	 			numeroMaximo=numeroIngresado;
	 			letraMaxima=letraIngresada;
	 		}
	 		else
	 		{
	 			if(numeroIngresado<numeroMinimo)
	 			{
	 				numeroMinimo=numeroIngresado;
	 				letraMinima=letraIngresada;
	 			}
	 		}
	 	}
	 	//numeros maximos y minimos 	

	}

	promedioPositivos=sumaPositivos/cantidadPositivos;

	mensaje="Se ingresaron "+numerosPares+" numeros pares <br>";
	mensaje=mensaje+"Se ingresaron "+numerosImpares+" numeros impares <br>";
	mensaje=mensaje+"Se ingresron "+cantidadCeros+" numeros cero <br>";
	mensaje=mensaje+"El promedio de todos los numeros positivos es: "+promedioPositivos+"<br>";
	mensaje=mensaje+"La suma de todos los numeros negativos es: "+sumaNegativos+"<br>";
	mensaje=mensaje+"Numero maximo con su letra: "+letraMaxima+" "+numeroMaximo+"<br>";
	mensaje=mensaje+"Numero minimo con su letra: "+letraMinima+" "+numeroMinimo;

	document.write(mensaje);


}
