/*
autor: Gabriel Remon
ejercicio: 04 - 2
*/

function mostrar()
{
	var edad;
	var mensaje;
	var condision;
	var condision;
	//Declarando variables

	edad = document.getElementById("txtIdEdad").value;
	//carga de datos 
	
	edad = parseInt(edad);
	//transformacion de texto a numero

	if(edad < 18 && edad >12)
	{
	
		mensaje = "La persona es adolecente";
	
	}

	else
	{
		mensaje = "";
	}
	//se ejecuta cuando el dato esta entre 13 y 17 

	alert(mensaje);
}