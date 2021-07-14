/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{

	numeroSecreto=Math.random();
	numeroSecreto=Math.floor(numeroSecreto * 100)+1;

	contadorDeIntentos = 0;
	document.getElementById("txtIdIntentos").value=contadorDeIntentos;

	alert("Comenzo el juego");

}

function verificar()
{
	var mensaje;
	var verificador;

	verificador = document.getElementById("txtIdNumero").value;
	//contadorDeIntentos = document.getElementById("txtIdIntentos").value;
	
	verificador = parseInt(verificador);
	//contadorDeIntentos = parseInt(contadorDeIntentos);

	contadorDeIntentos++;
	document.getElementById("txtIdIntentos").value = contadorDeIntentos;

	if(verificador == numeroSecreto)
	{

		if(contadorDeIntentos > 10) 
		{
			mensaje = "afortunado en el amor!!"
		}
		else
		{
			if(contadorDeIntentos>5)
			{
				mensaje="falta tecnica";
			}
			//si contador esta entre 6 y 10

			else
			{
				if(contadorDeIntentos==5)
				{
					mensaje="Usted esta en la media";
				}
				else
				{
					if(contadorDeIntentos==4)
					{
						mensaje="Exelente tecnica";
					}
					else
					{
						if(contadorDeIntentos==3)
						{
							mensaje="Esto es suerte";
						}
						//si contador es 3

						else
						{
							if(contadorDeIntentos==2)
							{
								mensaje="Excelente percepcion";
							}

							else
							{
								mensaje="Usted es un psiqico";
							}

						}
						//si contador es 1 o 2
					}
					//si contador es menor a 4
				}
				//si contador es menor a 5
			}
			//si contador es menor a 6

		}
		//selecciona el mensaje adecuado para el ganador
	
		mensaje = "GANASTE!! " + mensaje;
		contadorDeIntentos = 0;
		 //reinicio contado

	}
	//si el numero es correto

	else 
	{
		if(verificador>numeroSecreto)
		{
			mensaje="Te pasaste";
		}

		else
		{
			mensaje="Te falta";
		}
	}
	//si el numero es incorrecto

	alert(mensaje);
}

	

