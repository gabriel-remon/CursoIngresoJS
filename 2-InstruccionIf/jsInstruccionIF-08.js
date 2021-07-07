/*
autor: Gabriel Remon
ejercicio: 08 - 2
*/


unction mostrar()
{
	var edad;
	var estadoCivil;
	var mensaje;
	//Declarando variables

	mensaje = "";

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;
	//Entrada de datos

	edad = parseInt(edad);
	//Transformacion de texto a numero

	if(edad >= 18)
	{
		if(estadoCivil == "Soltero")
		{
			mensaje = "Es soltero no es menor";
		}
	}

	alert(mensaje);
}