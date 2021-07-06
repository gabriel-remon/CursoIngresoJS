/*
autor: Gabriel Remon
ejercicio: 05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;
	var mensaje;
	//Definiendo variables
	nombre = document.getElementById("txtIdNombre").value
	edad = document.getElementById("txtIdEdad").value
	//Carga de datos
	mensaje = "Usted es "+nombre+" y tiene "+edad;
	//Creacion del mensaje
	alert(mensaje);
}

