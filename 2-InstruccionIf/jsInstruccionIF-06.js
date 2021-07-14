/*
autor: Gabriel Remon
ejercicio: 06 - 2
*/


function mostrar()
{
	var edad;
	var mensaje;
	//Declarando variable

	edad = document.getElementById("txtIdEdad").value;
	//ingreso del dato

	edad = parseInt(edad);
	//Transformacion de texto a numero

	if(edad > 17)
	{
		mensaje = "La persona es adulta";
	}
	//solo si la edad es igual o mayor a 18

	else 
	{
		if(edad > 12)
		{
			mensaje = "La persona es adolecente";
		}
		//Si la edad esta entre 13 y 17
	
		else
		{
			mensaje = "La persona es un niño";
		}
		//si la edad es menor a 13
	}
	
	alert(mensaje);
}