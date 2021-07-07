/*
autor: Gabriel Remon
ejercicio: 07 - 2
*/


function mostrar()
{
	var edad;
	var estadoCivil;
	var mensaje;
	//declarando variables

	mensaje = "";

	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;
	//carga de datos

	edad = parseInt(edad);
	//Transformacion de texto a numero

	if (edad <18)
	{
		if (estadoCivil != "Soltero")
		{
				mensaje = "Es muy pequeño para NO ser soltero";
		}
	}

	alert(mensaje);

}