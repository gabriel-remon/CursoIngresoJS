/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/

var colorRandom;

function comenzar()
{
	var mensajeInicio;

	colorRandom=Math.floor(Math.random()*6);

	switch(colorRandom)
	{
		case 0:
			colorRandom="azul";
		break;

		case 1:
			colorRandom="amarillo";
		break;

		case 2: 
			colorRandom="marron";
		break;

		case 3:
			colorRandom="verde";
		break;

		case 4:
			colorRandom="celeste";
		break;

		default:
			colorRandom="rojo";
		break;
	}

	mensajeInicio="Apriete el boton "+colorRandom;

	document.getElementById("txtIdColorElegido").value=mensajeInicio;

	

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	var colorParametro;
	var mensajeRespuesta;

	if(colorParametro==colorRandom)
	{
		mensajeRespuesta="Correcto ese es el color";	
	}
	else
	{
		mensajeRespuesta="Te equivocaste";
	}

	alert(mensajeRespuesta);

	comenzar();
	
}



