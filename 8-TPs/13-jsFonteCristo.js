/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.

autor: Remon Gabriel
actividad: TP 13

*/

function verificadorPositivo(numeroIngresado)
{
	var numeroIngresado;

	numeroIngresado=document.getElementById("txtIdNumero").value;
	numeroIngresado=parseInt(numeroIngresado);
	while(!(numeroIngresado>0))
	{
		numeroIngresado=prompt("Ingrese un numero positivo");
		numeroIngresado=parseInt(numeroIngresado);
	}

	return numeroIngresado;

}


function NumerosPares()
{
	var numeroIngresado;
	var resto;
	var contadorPares;
	var mensaje;
	var numeroFinal;

	contadorPares=0;

	numeroIngresado=verificadorPositivo(numeroIngresado);

	resto=numeroIngresado%2;
	if (resto==0)
	{
		numeroFinal=numeroIngresado;
	}
	else
	{
		numeroFinal=numeroIngresado-1;
	}

	while(numeroFinal>0)
	{
		contadorPares++;
		numeroFinal=numeroFinal-2;
	}

	mensaje="Hay "+contadorPares+" numeros pares entre el "+numeroIngresado+" y 0";

	alert(mensaje);
}

function NumerosImpares()
{
	var numeroIngresado;
	var numeroFinal
	var resto;
	var contadorImpares;
	var mensaje;

	contadorImpares=0;

	numeroIngresado=verificadorPositivo(numeroIngresado);

	resto=numeroIngresado%2;
	if(resto==0)
	{
		numeroFinal=numeroIngresado-1;
	}
	else
	{
		numeroFinal=numeroIngresado;
	}

	while(numeroFinal>0)
	{
		contadorImpares++;
		numeroFinal=numeroFinal-2;
	}

	mensaje="Hay "+contadorImpares+" numeros impares entre el "+numeroIngresado+" y 0";
	
	alert(mensaje);

}

function NumerosDivisibles()
{
	var numeroIngresado;
	var contador;
	var contadorMultiplos;
	var resto;
	var numeroFinal;

	contador=100;
	contadorMultiplos=0;

	numeroIngresado=verificadorPositivo(numeroIngresado);

	if(numeroIngresado<100)
	{
		contador=numeroIngresado;
	}

	while(contador>0)
	{

		resto=numeroIngresado%contador;
		if(resto==0)
		{
			contadorMultiplos++;
		}
		contador--;
	}

	mensaje="hay "+contadorMultiplos+" numeros divisibles de "+numeroIngresado+" entre 100 y 1";

	alert(mensaje);
}

function VerificarPrimo()
{
	var numeroIngresado;
	var contador;
	var contadorMultiplos;
	var resto;
	var banderaPrimo;
	var mensaje;

	banderaPrimo=true;
	contadorMultiplos=0;

	numeroIngresado=verificadorPositivo(numeroIngresado);
	contador=numeroIngresado;

	while(contador>0)
	{
		resto=numeroIngresado%contador;
		if(resto==0)
		{
			contadorMultiplos++
			if(contadorMultiplos==3)
			{
				banderaPrimo=false;
				contador=0;
			}
		}

		contador--;
	}

	if(banderaPrimo)
	{
		mensaje="Este es un numero primo";
	}
	else
	{
		mensaje="Este no es un numero primo";
	}

	alert(mensaje);

}

function NumerosPrimos()
{
	var numeroIngresado;
	var contadorTotal;
	var contadorPrimos;
	var numeroPrimo;
	var contadorMultiplos;
	var resto;
	var banderaPrimo;
	var mensaje;
	var cantidadPrimos;

	banderaPrimo=true;
	contadorMultiplos=0;
	cantidadPrimos=0;

	numeroIngresado=verificadorPositivo(numeroIngresado);

	contadorTotal=numeroIngresado;

	while(contadorTotal>1)
	{
		numeroPrimo=contadorTotal;
		contadorPrimos=contadorTotal;
		
		while(contadorPrimos>0)
		{
			resto=numeroPrimo%contadorPrimos;
			if(resto==0)
			{
				contadorMultiplos++;
				if(contadorMultiplos==3)
				{
					contadorPrimos=0;
					banderaPrimo=false;

				}
			}
			contadorPrimos--;
		}

		if(banderaPrimo)
		{
			cantidadPrimos++;
		}
		else
		{
			banderaPrimo=true;
		}

		contadorMultiplos=0;
		contadorTotal--;
	}

	mensaje="hay "+cantidadPrimos+" numeros primos entre el "+numeroIngresado+" y 0";

	alert(mensaje);

}