function mostrar()
{
	var edad;
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	if(edad >= 18)
	{
		alert("La persona es adulta");
	}
	else if(edad > 12)
	{
		alert("La persona es adolecente");
	}
	else
	{
		alert("La persona es un niño");
	}
}