/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.

autor: Remon Gabriel
actuvidad: WHILE 05

*/
function mostrar()
{
	var sexoIngresado;
	var mensaje;

	sexoIngresado=prompt("ingrese f o m ");

	while(sexoIngresado!="f" && sexoIngresado!="m")
	{
		sexoIngresado=prompt("error, ingrese f o m");
	}

	document.getElementById("txtIdSexo").value=sexoIngresado;

	/*
	while(bucle==0)
	{
		sexoIngresado=prompt("ingrese su sexo (f o m)");

		switch(sexoIngresado)
		{
			case "f":
				mensaje="Su sexo es femenino";
				bucle=1;
			break;

			case "m":
				mensaje="Su sexo es masculino";
				bucle=1;
			break;

			default:
				mensaje="Dato ingresado, no valido";
			break;

		}
		document.getElementById("txtIdSexo").value=mensaje;
	}
	*/

}