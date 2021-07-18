/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	var bucle;
	var mensaje;

	bucle=0;

	while(bucle==0)
	{
		sexoIngresado=prompt("ingrese su sexo (f o m)");

		if (sexoIngresado=="f")
		{
			mensaje="su sexo es femenino";
			bucle=1;
		}
		else
		{
			if (sexoIngresado=="m")
			{
				mensaje="su sexo es masculino";
				bucle=1;
			}
			else
			{
				mensaje="Texto ingresado, no valido";
			}
		}
		document.getElementById("txtIdSexo").value=mensaje;
	}

}//FIN DE LA FUNCIÓN