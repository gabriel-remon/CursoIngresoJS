/*
autor: Gabriel Remon
ejercicio: 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var umeroDos;
	var resultado;
	var mensaje;
	//Definiendo variables
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	//Darga de dato
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	//Transformacion de texto a numero
	resultado = numeroUno + numeroDos;
	//Duma de datos
	mensaje = "La suma es "+resultado;
	//Creacion del mensaje
	alert(mensaje);

}

