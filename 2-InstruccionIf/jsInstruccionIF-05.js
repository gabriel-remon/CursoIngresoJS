/*
autor: Gabriel Remon
ejercicio: 05 - 2
*/


function mostrar()
{
	var edad;
	var mensaje;
	//Declarando variables

	mensaje = "";
	//limpieza de variable

	edad = document.getElementById("txtIdEdad").value;
	//toma de datos
	
	edad = parseInt(edad);
	//Transformacion de texto a numero

	if(edad >= 18)
	{
		mensaje = "La persona no es adolecente";
	}
	else if(edad <13)
	{
		mensaje = "La persona no es adolecente";
	}

	alert(mensaje);
}