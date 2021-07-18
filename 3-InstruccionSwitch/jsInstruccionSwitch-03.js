/*
autor: Gabriel Remon
ejercicio: SWITCH 03
*/

function mostrar()
{
	var mesDelAño;
	var mensaje;
	//Declarando variable

	mesDelAño = document.getElementById("txtIdMes").value;
	//carga de variable
	
	switch(mesDelAño)
	{
		case "Febrero":
			mensaje="Este mes no tiene mas de 29 dias";
		break;

		default:
			mensaje="Este mes tiene 30 o mas dias";
		break

	}

	/*
	if(mesDelAño == "Febrero")
	{
		mensaje = "Este mes no tiene mas de 29 dias";
	}
	else
	{
		mensaje = "Este mes tiene 30 o más dias";
	}
	*/

	alert(mensaje);
}
