/*
autor: Gabriel Remon
ejercicio: SWITCH 06
*/


function mostrar()
{
	var horaDelDia;
	var mensaje;
	//Declarando variable

	horaDelDia = document.getElementById("txtIdHora").value;
	horaDelDia=parseInt(horaDelDia);
	//Carga de dato

	if(horaDelDia > 24 || isNaN(horaDelDia))
	{
		mensaje = "La hora no existe";
	}
	//mensaje de error si no se ingresa un numero entre 0 y 24

	else
	{
		
		switch(horaDelDia)
		{	
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
				mensaje = "Es de mañana";
			break;

			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
				mensaje = "Es de tarde";
			break;

			default:
			/*
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			*/
				mensaje = "Es de noche";
			break;
		}
	}
	alert(mensaje);

}