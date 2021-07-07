/*
autor: Gabriel Remon
ejercicio: 02 - 2
*/

function mostrar()
{
	var edad;
	var mensaje;
	//Declarando variables

	mensaje = "";
	//limpieza de variable

	edad = document.getElementById("txtIdEdad").value;
	//carga de dato

	edad = parseInt(edad);
	//transformacion de texto a numero

	if(edad >= 18)
	{
		mensaje = "La persona es mayor de edad";
	} 

	alert(mensaje);

}