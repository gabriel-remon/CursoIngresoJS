/*
autor: Gabriel Remon
ejercicio: 05 - 2
*/


function mostrar()
{
	var edad;
	var mensaje;
	//Declarando variables


	edad = document.getElementById("txtIdEdad").value;
	//toma de datos
	
	edad = parseInt(edad);
	//Transformacion de texto a numero

	if(edad > 17 || edad < 13)
	{
		mensaje = "La persona no es adolecente";
	}

	else
	{
		mensaje = "";
	}

	alert(mensaje);
}