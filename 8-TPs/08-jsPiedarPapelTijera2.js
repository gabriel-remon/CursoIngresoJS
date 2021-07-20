/*

alumno: Remon Gabriel
Actuvidad: TP 08

*/



var eleccionMaquina;
var ContadorDeEmpates = 0;
var ContadorDeGanadas = 0;
var ContadorDePerdidas = 0;
var mensaje;


function comenzar()
{
	eleccionMaquina=Math.random();
	eleccionMaquina=Math.floor(eleccionMaquina * 3 +1);

}

function piedra() //piedra = 1
{	

	switch(eleccionMaquina)
	{
		case 1:
			mensaje = "empato";
			ContadorDeEmpates++;
		break;

		case 2:
			mensaje = "perdio";
			ContadorDePerdidas++;
		break;

		default:
			mensaje = "gano";
			ContadorDeGanadas++;
		break;
	}

	mostrarResultado();
	comenzar();
}

function papel() //papel = 2
{
	switch(eleccionMaquina)
	{
		case 1:
			mensaje = "gano";
			ContadorDeGanadas++;
		break;

		case 2:
			mensaje = "empato";
			ContadorDeEmpates++;
		break;

		default:
			mensaje = "perdio";
			ContadorDePerdidas++;
		break;
	}

	mostrarResultado();
	comenzar();
}
function tijera()
{
	switch(eleccionMaquina)
	{
		case 1:
			mensaje="perdio";
			ContadorDePerdidas++;
		break;

		case 2:
			mensaje="gano";
			ContadorDeGanadas++;
		break;

		default:
			mensaje="empato";
			ContadorDeEmpates++;
		break;
	}

	mostrarResultado();
	comenzar();
}


function mostrarResultado()
{

	var mensajeGanaste;
	var mensajePerdiste;
	var mensajeEmpataste;
	var mensajeEleccionMaquina;


	switch(eleccionMaquina)
	{
		case 1:
			mensajeEleccionMaquina="piedra";
		break;

		case 2:
			mensajeEleccionMaquina="papel";
		break;

		default:
			mensajeEleccionMaquina="tijeras";
		break;
	}

	mensajeGanaste = "Ganaste "+ContadorDeGanadas+" veces";
	mensajePerdiste = "Perdiste "+ContadorDePerdidas+" veces";
	mensajeEmpataste= "Empataste "+ContadorDeEmpates+" veces";
	
	mensaje= "la maquina eligio "+mensajeEleccionMaquina+". Usted "+mensaje;
	//creacion de mensajes

	document.getElementById("txtIdGanadas").value = mensajeGanaste;
	document.getElementById("txtIdPerdidas").value = mensajePerdiste;
	document.getElementById("txtIdEmpatadas").value = mensajeEmpataste;
	
	alert(mensaje);
}
