/*
autor: Gabriel Remon
ejercicio: 03
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;
	var mensaje;
	//Definiendo variables
	
	nombreIngresado = document.getElementById("txtIdNombre").value;
	//Carga de dato
	
	mensaje = "Su nombre es "+nombreIngresado;
	//Creacion del mensaje
	
	alert(mensaje);
}