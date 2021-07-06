/*
autor: Gabriel Remon
ejercicio: 02
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	var mensaje;
	//Definiendo variables
	
	nombre = prompt("Ingrese su nombre", "Ej. Peperino Pomulo")
	//Carga de dato en variable "a" 
	
	mensaje = "Su nombre es "+nombre;
	//Creacion del mensaje
	
	alert(mensaje);
	//Impresion de la variable
}

