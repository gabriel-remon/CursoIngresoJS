function mostrar()
{
	var edad;
	var estadoCivil;
	edad = document.getElementById("txtIdEdad").value;
	estadoCivil = document.getElementById("estadoCivil").value;
	edad = parseInt(edad);
	if(edad >= 18)
	{
		if(estadoCivil == "Soltero")
		{
			alert("Es soltero no es menor");
		}
	}
}