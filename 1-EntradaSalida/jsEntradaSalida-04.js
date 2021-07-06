/* 
autor: Gabriel Remon
ejercicio: 04
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;
	//Definiendo la variable
	document.getElementById("txtIdNombre").value = "";
	//Eliminacion del dato cargado en la ultima ejecucion
	nombre = prompt("Ingrese su nombre","Ej. Pan triste")
	//Carga del dato
	document.getElementById("txtIdNombre").value = nombre;
	//Muestra del dato cargado en variable
}

