function mostrar()
{
	var mesDelAño;
	var mensaje;
	mesDelAño = document.getElementById("txtIdMes").value;
	switch(mesDelAño)
	{
		case "Enero" :
		case "Marzo" :
		case "Mayo" :
		case "Julio" :
		case "Agosto" :
		case "Octubre" :
		case "Diciembre" :
		mensaje = "Mes con 31 dias";
		break;
 		//meses con 31 dias
				
		case "Abril" :
		case "Junio" :
		case "Septiembre" :
		case "Noviembre" :
		mensaje = "Mes con 30 dias";
		break;
		// meses con 30 dias

		case "Febrero" :
		mensaje = "Mes con 28 dias";
		//mes con 28 dias
	} 

	alert(mensaje);
	
	



}