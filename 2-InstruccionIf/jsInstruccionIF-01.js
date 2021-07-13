/*
autor: Gabriel Remon
ejercicio: 01 - 2
*/

function mostrar()
{
	var edad;
	var mensaje;
	//Declarando variable

	edad = document.getElementById("txtIdEdad").value;
	//carga de variable

	if(edad == "15" )
	{
		mensaje = "Niña bonita";
	}
	else 
	{
		mensaje = "";
	}

	alert(mensaje);
}