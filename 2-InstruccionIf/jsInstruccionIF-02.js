/*
autor: Gabriel Remon
ejercicio: 02 - 2
*/

function mostrar()
{
	var edad;
	var mensaje;
	//Declarando variables

	edad = document.getElementById("txtIdEdad").value;
	//carga de dato

	edad = parseInt(edad);
	//transformacion de texto a numero

	if(edad > 17)
	{
		mensaje = "La persona es mayor de edad";
	} 
	else
	{
		mensaje = "";
	}

	alert(mensaje);

}