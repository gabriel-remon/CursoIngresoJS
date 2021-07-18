/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var clave;
	var contador;

	contador=1;

	while(clave!="utn750")
	{
		if (contador==2)
		{
			alert("contraseña incorrecta");
			contador=0;
		}
		else
		{
			clave=prompt("Ingrese la contraseña");	
		}
		contador++;

	}
	alert("contraseña correcta");
	
}//FIN DE LA FUNCIÓN
