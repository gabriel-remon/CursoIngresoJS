/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;
	var a;
	var b;
	//definir variable
	nombre=document.getElementById("txtIdNombre").value
	edad=document.getElementById("txtIdEdad").value
	//carga de datos
	a="usted es "+nombre;
	b=a+" y tiene "+edad
	//creacion de una unica variable con el nombre 
	//y la edad
	alert(""+b);
}

