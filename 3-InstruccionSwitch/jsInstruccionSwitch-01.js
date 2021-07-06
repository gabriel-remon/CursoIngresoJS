function mostrar()
{
	var mesDelAño;
	var mensaje;
	mensaje = "";
	mesDelAño = document.getElementById("txtIdMes").value;
	switch(mesDelAño)
	{
		case "Enero" :
			mensaje = "que comience bien el año!!";
			break;
		case "Marzo" :
			mensaje = "a clases!!!"
			break;
		case "Julio" :
			mensaje = "se vienen las vacaciones!!!";
			break;
		case "Diciembre" :
			mensaje = "Felices fiestas!!!"
			break;
	}
	alert(mensaje);



}