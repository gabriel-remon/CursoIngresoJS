function mostrar()
{
	var mesDelAño;
	var mensaje;
	mesDelAño = document.getElementById("txtIdMes").value;
	if(mesDelAño === "Febrero")
	{
		mensaje = "Este mes no tiene mas de 29 dias";
	}
	else
	{
		mensaje = "Este mes tiene 30 o más dias";
	}
	alert(mensaje);
}
