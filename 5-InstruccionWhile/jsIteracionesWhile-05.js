/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.

autor: Remon Gabriel
actuvidad: WHILE 05

*/
function mostrar()
{
	var sexoIngresado;
	var bucle;
	var mensaje;

	bucle=0;

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

}