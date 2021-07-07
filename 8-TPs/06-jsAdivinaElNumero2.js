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

	numeroSecreto = Math.random();
	numeroSecreto = Math.floor(numeroSecreto * 100 + 1);
//umeroSecreto = numeroSecreto + 1;
	document.getElementById("txtIdIntentos").value = 0;
	alert("Comenzo el juego");
//lert(numeroSecreto); 
}

function verificar()
{
	var mensaje;
	var verificador;

	verificador = document.getElementById("txtIdNumero").value;
	contadorDeIntentos = document.getElementById("txtIdIntentos").value;
	
	verificador = parseInt(verificador);
	contadorDeIntentos = parseInt(contadorDeIntentos);

	contadorDeIntentos = contadorDeIntentos + 1;
	document.getElementById("txtIdIntentos").value = contadorDeIntentos;

	if(verificador == numeroSecreto)
	{
		mensaje = "ganaste!!";
		if(contadorDeIntentos > 10) 
		{
			mensaje = "afortunado en el amor!!"
		}
		else
		{
			switch( contadorDeIntentos )
			{
				case 1 :
				mensaje = "usted es un Psiquico";
				break;

				case 2 :
				mensaje = "excelente percepcion";
				break;

				case 3 :
				mensaje = "Esto es suerte";
				break;

				case 4 :
				mensaje = "Exelente tecnica";
				break;

				case 5 :
				mensaje = "usted esta en la media";
				break;

				case 6 :
				case 7 :
				case 8 :
				case 9 :
				case 10 :
				mensaje = "falta tecnica";
			}
		}
		//selecciona el mensaje adecuado para el ganador
	
		mensaje = "GANASTE!! " + mensaje;
		contadorDeIntentos = 0;
		 //reinicio contado

	}

	else if( verificador > numeroSecreto )
	{
		mensaje = "Te pasaste ";
	}

	else
	{
		mensaje = "Te falta ";
	}

	alert(mensaje);
}

	

