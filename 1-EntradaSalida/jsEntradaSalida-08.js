/*
autor: Gabriel Remon
ejercicio: 08
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var resto;
	var mensaje;
	//Definicion de variables
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;
	//Carga de datos
	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);
	//Transformacion texto a numero
	resto = dividendo % divisor;
	//Operacion de resto
	mensaje = "El resto es "+resto;
	//Creacion del mensaje
	alert(mensaje);
}
