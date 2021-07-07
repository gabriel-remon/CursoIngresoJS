/*
autor: Gabriel Remon
ejercicio: 02 - 3
*/


function mostrar()
{
	var mesDelAño;
	var mensaje;
	//Declarando variable

	mesDelAño = document.getElementById("txtIdMes").value;
	//carga de dato

	switch(mesDelAño)
	{
		case "Enero" :
		case "Febrero" :
		case "Marzo" :
		case "Abril" : 
		case "Mayo" :
		case "Junio" :
		mensaje = "Falta para el invierno";
		break;

		case "Julio" :
		case "Agosto" :
		mensaje = "Abrigate que hace frio";
		break;

		case "Septiembre" :
		case "Octubre" :
		case "Noviembre" :
		case "Diciembre":
		mensaje = "Ya pasamos el frio, ahora calor!!!";
	}

	alert(mensaje);



}//FIN DE LA FUNCIÓN