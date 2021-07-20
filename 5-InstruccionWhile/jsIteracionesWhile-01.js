/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.

autor: Remon Gabriel
actuvidad: WHILE 01

*/
function mostrar()
{

	var numero;
	var mensaje;

	numero=0;
	
	while(numero<10)
	{
		numero++;
		mensaje="este es el "+numero+"º numero";
		alert(mensaje);
	}

}
