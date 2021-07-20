/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.

alumno: Remon Gabriel
Actuvidad: TP 07

*/
var eleccionMaquina;
var mensaje;

function comenzar()
{
	eleccionMaquina=Math.random();
	eleccionMaquina=Math.floor(eleccionMaquina*3)+1;	
}

function piedra() // piedra = 1
{
	switch(eleccionMaquina)
	{
		case 1:
		mensaje="Usted empato";
		break;

		case 2:
		mensaje="Usted perdio";
		break;

		default:
		mensaje="Usted gano";
	}

	mostrar();
	//muestra del mensaje

	comenzar();
	//reinicio eleccion de la maquina
}

function papel() // papel = 2
{
	switch (eleccionMaquina)
	{
		case 1:
		mensaje="Usted gano";
		break;

		case 2:
		mensaje="Usted empato";
		break; 

		default:
		mensaje="Usted perdio";
	}

	mostrar();
	//muestra del mensaje

	comenzar();
	//reinicio eleccion de la maquina

}

function tijera() //tijeras = 3
{	
	switch(eleccionMaquina)
	{
		case 1:
		mensaje="Usted perdio";
		break;

		case 2 :
		mensaje="Usted gano";
		break;

		default:
		mensaje="Usted empato";
	}

	mostrar();
	//muestra del mensaje

	comenzar();
	//reinicio eleccion maquina

}

function mostrar()
{
	var mensajeMaquina;

	switch(eleccionMaquina)
	{
		case 1: 
			mensajeMaquina="piedra";
		break;

		case 2:
			mensajeMaquina="papel";
		break;

		default:
			mensajeMaquina="tijeras";
		break;
	}

	mensaje=mensaje+". La maquina eligio "+mensajeMaquina;
	alert(mensaje);
}
