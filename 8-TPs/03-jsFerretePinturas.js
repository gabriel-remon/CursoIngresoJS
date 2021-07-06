/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var tempInicial;
	var tempFinal;
	//Definicion de variables
	tempInicial = document.getElementById("txtIdTemperatura").value;
	//Carga de dato
	tempInicial = parseInt(tempInicial);
	//Transforamacion de texto a numero
	tempFinal = (tempInicial - 32) * (5/9);
	//Transforamacion de grados fahrenheir a centigrados
	mensaje = tempInicial+" Fahrenheit son "+tempFinal+" centigrados";
	//Creacion del mensaje
	alert(mensaje);
}

function CentigradosFahrenheit () 
{
	var tempInicial;
	var tempFinal;
	//Definicion de variables
	tempInicial = document.getElementById("txtIdTemperatura").value;
	//carga de dato
	tempInicial = parseInt(tempInicial);
	//transforamacion de texto a numero
	tempFinal = (tempInicial * 9/5) + 32;
	//transforamacion de grados centigrados a fahrenheir
	mensaje = tempInicial+" Fahrenheit son "+tempFinal+" centigrados";
	//Creacion del mensaje
	alert(mensaje);
}
