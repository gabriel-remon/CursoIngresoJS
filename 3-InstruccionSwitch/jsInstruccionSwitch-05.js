/*
autor: Gabriel Remon
ejercicio: 05 - 3
*/


function mostrar()
{
	var horaDelDia;
	var mensaje;
	//deficiendo variables
	
	mensaje = "";
	//limpiando variable mensaje

	horaDelDia = document.getElementById("txtIdHora").value;
	//toma de la hora en variable
	
	if(horaDelDia === "11")
	{
		mensaje= "Es de mañana";
	}	
	//instruccion unicamente si la hora es 11

	horaDelDia = Math.floor(horaDelDia);
	//comversion al numero entero mas cernano de forma decendente

	switch(horaDelDia)
	{
		case 7 :
		case 8 :
		case 9 :
		case 10 : 
		mensaje = "Es de mañana"; 
		break;
	}
	//en caso que la hora este entre las 7 y las 10.99

	alert(mensaje);
	
	



}