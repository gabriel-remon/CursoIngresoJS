/*
alumno: Gabriel remon
ejercicio : parcial 2019 04
*/

function mostrar()
{
	var numero1;
	var numero2;
	var resultado;
	var mensaje;

	numero1=prompt("ingrese el primero numero");

	numero2=prompt("ingrese el segundo numero");

	if(numero1==numero2)
	{
		mensaje=numero1+numero1;
	}
	else
	{
		numero2=parseInt(numero2);
		numero1=parseInt(numero1);

		if(numero1>numero2)
		{
			resultado=numero1-numero2;
			
			if(resultado>9)
			{
				mensaje="La resta es "+resultado+" y supero el 10";
			}
			else
			{
				mensaje="la resta es "+resultado;
			}
		}
		else
		{
			resultado=numero1+numero2;
			mensaje="la suma es "+resultado;
		}	
	}

	alert(mensaje);
}
