function mostrar()
{
	var edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad >= 18)
	{
		alert("La persona no es adolecente");
	}
	else if(edad <13)
	{
		alert("La persona no es adolecente");
	}
}