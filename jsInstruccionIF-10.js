function mostrar()
{
	var nota;
	var randomT;
	var mensaje;
	randomT = Math.random();
	nota = Math.floor( randomT * 11);
	if(nota >= 9)
	{
		mensaje = "EXCELENTE";
	}
	else if(nota >4)
	{
		mensaje = "APROBÓ";
	}
	else
	{
		mensaje = "Vamos, la proxima se puede";
	}
	mensaje = mensaje+ ". Su nota es "+nota;
	alert(mensaje);	


}