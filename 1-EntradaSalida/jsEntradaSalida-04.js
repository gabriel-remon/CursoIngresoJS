/* 
autor: Gabriel Remon
ejercicio: 04
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	var mensaje;
	//Definiendo la variable
	
	document.getElementById("txtIdNombre").value = "";
	//Eliminacion del dato cargado en la ultima ejecucion
	
	nombre = prompt("Ingrese su nombre","Ej. Pan triste")
	//Carga del dato
	
	mensaje = "Su nombre es "+nombre;
	//creacion del mensaje

	document.getElementById("txtIdNombre").value = mensaje;
	//Muestra del dato cargado en variable
}

