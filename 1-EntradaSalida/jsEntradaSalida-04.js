/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let a;
	//definir variable
	document.getElementById("txtIdNombre").value = "";
	a=prompt("ingrese su nombre")
	document.getElementById("txtIdNombre").value = a;
}

