/*
autor: Gabriel Remon
ejercicio: 08 - 2
*/


function mostrar()
{
	var edad;
	var estadoCivil;
	var mensaje;
	//Declarando variables

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;
	//carga de datos de datos

	if(edad>17 && estadoCivil=="Soltero")
	{
	
		alert("Es soltero y no es menor");
	
	}

}