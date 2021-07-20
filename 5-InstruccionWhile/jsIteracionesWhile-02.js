/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.

autor: Remon Gabriel
actuvidad: WHILE 02

*/
function mostrar()
{
	var contador;
	var mensaje;

	contador=10;
	while(contador>0)
	{
		mensaje="El numero es "+contador;	
		alert(mensaje);
		contador--;
	}

}