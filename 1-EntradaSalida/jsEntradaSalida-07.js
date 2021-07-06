/*
autor: Gabriel Remon
ejercicio: 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;
	//Definicion de variables
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	//Carga de datos
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	//Transformacion de texto a dato
	resultado = numeroUno + numeroDos;
	//Operacion de suma
	mensaje = "La suma es "+resultado;
	//Creacion de mensaje
	alert(mensaje);	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;
	//Definicion de variables
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	//Carga de datos
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	//Transformacion de texto a dato
	resultado = numeroUno - numeroDos;
	//Operacion de resta
	mensaje = "La resta es "+resultado;
	//Creacion de mensaje
	alert(mensaje);	
	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;
	//Definicion de variables
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	//Carga de datos
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	//Transformacion de texto a dato
	resultado = numeroUno * numeroDos;
	//Operacion de multiplicacion
	mensaje = "La multiplicacion es "+resultado;
	//Creacion de mensaje
	alert(mensaje);	
	
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;
	//Definicion de variables
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;
	//Carga de datos
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	//Transformacion de texto a dato
	resultado = numeroUno / numeroDos;
	//Operacion de divicion
	mensaje = "La divicion es "+resultado;
	//Creacion de mensaje
	alert(mensaje);	
}

