var eleccionMaquina;
var ContadorDeEmpates = 0;
var ContadorDeGanadas = 0;
var ContadorDePerdidas = 0;
var mensajeEleccionMaquina;
var mensaje;
var mensajeGanaste;
var mensajePerdiste;
var mensajeEmpataste;

function comenzar()
{
	eleccionMaquina = Math.random();
	eleccionMaquina = Math.floor(eleccionMaquina * 3 +1);
 //	mostrarResultado();
}

function piedra() //piedra = 1
{	

	switch(eleccionMaquina)
	{
		case 1 :
		mensaje = "empato";
		ContadorDeEmpates = ContadorDeEmpates + 1;
		break;

		case 2 :
		mensaje = "perdio";
		ContadorDeGanadas = ContadorDeGanadas + 1;
		break;

		case 3:
		mensaje = "gano";
		ContadorDePerdidas = ContadorDePerdidas + 1;
	}

	mostrarResultado();
	comenzar();
}

function papel() //papel = 2
{
	switch(eleccionMaquina)
	{
		case 1 :
		mensaje = "gano";
		ContadorDeGanadas = ContadorDeGanadas + 1;
		break;

		case 2 :
		mensaje = "empato";
		ContadorDeEmpates = ContadorDeEmpates + 1;
		break;

		case 3 :
		mensaje = "perdio";
		ContadorDePerdidas = ContadorDePerdidas + 1;
	}

	mostrarResultado();
	comenzar();
}
function tijera()
{
	switch(eleccionMaquina)
	{
		case 1 :
		mensaje = "perdio";
		ContadorDePerdidas = ContadorDePerdidas + 1;
		break;

		case 2 :
		mensaje = "gano";
		ContadorDeGanadas = ContadorDeGanadas + 1;
		break;

		case 3 :
		mensaje = "empato";
		ContadorDeEmpates = ContadorDeEmpates + 1;
	}

	mostrarResultado();
	comenzar();
}


function mostrarResultado()
{
	switch(eleccionMaquina)
	{
		case 1 :
		mensajeEleccionMaquina = "piedra";
		break;

		case 2 :
		mensajeEleccionMaquina = "papel";
		break;

		case 3 :
		mensajeEleccionMaquina = "tijeras";
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
