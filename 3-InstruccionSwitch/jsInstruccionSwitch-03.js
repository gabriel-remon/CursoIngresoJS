/*
autor: Gabriel Remon
ejercicio: 03 - 3
*/

function mostrar()
{
	var mesDelAño;
	var mensaje;
	//Declarando variable

	mesDelAño = document.getElementById("txtIdMes").value;
	//carga de variable
	
	if(mesDelAño === "Febrero")
	{
		mensaje = "Este mes no tiene mas de 29 dias";
	}
	else
	{
		mensaje = "Este mes tiene 30 o más dias";
	}
	alert(mensaje);
}
