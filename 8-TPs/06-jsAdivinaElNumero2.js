/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.

alumno: Remon Gabriel
Actuvidad: TP 06

*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{

	numeroSecreto=Math.random();
	numeroSecreto=Math.floor(numeroSecreto * 100)+1;

	contadorDeIntentos=0;
	document.getElementById("txtIdIntentos").value=contadorDeIntentos;

	alert("Comenzo el juego");

}

function verificar()
{
	var mensaje;
	var verificador;

	verificador=document.getElementById("txtIdNumero").value;
	//contadorDeIntentos = document.getElementById("txtIdIntentos").value;
	
	verificador=parseInt(verificador);
	//contadorDeIntentos = parseInt(contadorDeIntentos);

	contadorDeIntentos++;
	document.getElementById("txtIdIntentos").value = contadorDeIntentos;


	if(verificador == numeroSecreto)
	{

		switch(contadorDeIntentos)
		{
			case 1:
				mensaje="Usted es un Psiquico";
			break;

			case 2:
				mensaje="Exelente tecnica";
			break;

			case 3:
				mensaje="Esto es suerte";
			break;

			case 4:
				mensaje="Exelente tecnica";
			break;

			case 5:
				mensaje="Usted esta en la media";
			break;

			default:
				if(contadorDeIntentos<11)
				{
					mensaje="Falta tecnica";
				}
				//si se hacen entre 6 a 10 intentos

				else
				{
					mensaje="Afortunado en el amor!!";
				}
				//si son mas de 10 intentos 
		}

		mensaje="GANASTE!! "+mensaje;
		contadorDeIntentos=0;
		 //reinicio contado

	}
	//si el numero es correto

	else 
	{
		if(verificador>numeroSecreto)
		{
			mensaje="Te pasaste del numero secreto";
		}

		else
		{
			mensaje="Te falta para el numero secreto";
		}
	}
	//si el numero es incorrecto

	alert(mensaje);
}

	

