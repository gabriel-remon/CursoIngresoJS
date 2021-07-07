/*
autor: Gabriel Remon
ejercicio: 04 - 2
*/

function mostrar()
{
	var edad;
	var mensaje;
	//Declarando variables

	mensaje = "";
	//limpieza de variable

	edad = document.getElementById("txtIdEdad").value;
	//carga de datos 
	
	edad = parseInt(edad);
	//transformacion de texto a numero

	if(edad < 18)
	{
		if(edad>12)
		{
			mensaje = "La persona es adolecente";
		}
	}
	//se ejecuta cuando el dato esta entre 13 y 17 

	alert(mensaje);
}