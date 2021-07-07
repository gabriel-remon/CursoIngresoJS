/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	var txtComienzo;
	numeroSecreto = Math.random();
	numeroSecreto = Math.floor(numeroSecreto*101);
	document.getElementById("txtIdIntentos").value = 0;
	txtComienzo = "comenzo el juego";
	alert(txtComienzo);

}

function verificar()
{
	var verificador;
	var mensaje;

	verificador = document.getElementById("txtIdNumero").value;
	contadorIntentos =document.getElementById("txtIdIntentos").value;
	
	contadorIntentos = parseInt(contadorIntentos);
	verificador = parseInt(verificador);

	contadorIntentos = contadorIntentos + 1;


	if(verificador == numeroSecreto)
	{
		mensaje = "Usted es el ganador!!! y con solo "+contadorIntentos+" intentos";
	}
	else if(verificador > numeroSecreto)
	{
		mensaje = "Te pasaste del numero secreto";
	}
	else
	{
		mensaje = "Te falta para el numero secreto";
	}
	alert(mensaje);
	document.getElementById("txtIdIntentos").value = contadorIntentos;
}