/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var mensaje;

function comenzar()
{
	eleccionMaquina = Math.random();
	eleccionMaquina = Math.floor( eleccionMaquina * 3 + 1 );
	//alert (random);	
}

function piedra() // piedra = 1
{
	switch(eleccionMaquina)
	{
		case 1 :
		mensaje= "empate";
		break;

		case 2 :
		mensaje ="perdiste";
		break;

		case 3 :
		mensaje= "ganaste";
	}
	eleccionMaquina = Math.random();
	eleccionMaquina = Math.floor(eleccionMaquina * 3 + 1);
	//reinicio eleccion de la maquina

	alert(mensaje);	
}

function papel() // papel = 2
{
	switch (eleccionMaquina)
	{
		case 1 :
		mensaje = "ganaste";
		break;

		case 2 :
		mensaje = "empate";
		break; 

		case 3 :
		mensaje = "perdiste";
	}

	eleccionMaquina = Math.random();
	eleccionMaquina = Math.floor(eleccionMaquina * 3 +1);
	//reinicio eleccion de la maquina

	alert (mensaje);

}

function tijera() //tijeras = 3
{	
	switch(eleccionMaquina)
	{
		case 1 :
		mensaje = "perdiste";
		break;

		case 2 :
		mensaje = "ganaste";
		break;

		case 3 :
		mensaje = "empate";
	}

	eleccionMaquina = Math.random();
	eleccionMaquina = Math.floor(eleccionMaquina * 3 +1);
	//reinicio eleccion maquina

	alert(mensaje);

}
