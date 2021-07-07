/*
autor: Gabriel Remon
ejercicio: 06 - 3
*/


function mostrar()
{
	var horaDelDia;
	var mensaje;
	//Declarando variable

	horaDelDia = document.getElementById("txtIdHora").value;
	//Carga de dato

	if(horaDelDia > 24)
	{
		mensaje = "La hora no existe";
	}
	//mensaje de error si no se ingresa un numero entre 0 y 24

	else
	{
		horaDelDia = Math.floor(horaDelDia);
		//transformando un numero decimal al entero mas cercano de forma decendente

		switch(horaDelDia)
		{	
			case 7 :
			case 8 :
			case 9 :
			case 10 :
			case 11 :
			mensaje = "Es de mañana";
			break;

			case 12 :
			case 13 :
			case 14 :
			case 15 :
			case 16 :
				case 17 :
			case 18 :
			case 19 :
			mensaje = "Es de tarde";
			break;

			case 0 :
			case 1 :
			case 2 :
			case 3 :
			case 4 :
			case 5 :
			case 6 :
			case 20 :
			case 21 :
			case 22 :
			case 23 :
			case 24:
			mensaje = "Es de noche";
		}
	}
	alert(mensaje);

}