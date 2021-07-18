/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.

alumno: Remon Gabriel
Actuvidad: TP 05

*/

var numeroSecreto; 
var contadorIntentos;
//declarando variables para todas las funciones

function comenzar()
{
	var inicio;

	numeroSecreto=Math.random();
	numeroSecreto=Math.floor(numeroSecreto*101);
	//generacion del numero 

	contadorIntentos=0;
	document.getElementById("txtIdIntentos").value=contadorIntentos;
	//reinicio del contador

	inicio="comenzo el juego";
	alert(inicio);
	//mensaje de comienzo del juego

}

function verificar()
{
	var verificador;
	var mensaje;
	//declarando variables

	verificador=document.getElementById("txtIdNumero").value;
	verificador=parseInt(verificador);
	//carga del numero a adivinar

	contadorIntentos++;
	document.getElementById("txtIdIntentos").value = contadorIntentos;
	//incrementador del contador

	switch(verificador)
	{
		case numeroSecreto:
			mensaje="Usted es el ganador!!! y solo con "+contadorIntentos+" intentos";
			contadorIntentos=0;
		break;

		default:
			if(verificador>numeroSecreto)
			{
				mensaje="Te pasaste del numero secreto";
			}
			else
			{
				mensaje="Te falta para el numero secreto";
			}
		break;
	}

	alert(mensaje);

}