/*
autor: Gabriel Remon
ejercicio: 03 - 2
*/

function mostrar()
{
	var edad;
	var mensaje;
	//Declarando variables

	edad = document.getElementById("txtIdEdad").value;
	//Carga de datos

	edad = parseInt(edad);
	//comversion de texto a numero

	if(edad >= 18)
	{
		mensaje = "Persona mayor de edad";
	} 
	else
	{
		mensaje = "Persona menor de edad";
	}

	alert(mensaje);
}