/*
autor: Gabriel Remon
ejercicio: TP 02
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var totalAlambre;
	var mensaje;
	//definicion de variables
	
	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;
	//carga de datos
	
	largo = parseInt(largo);
	ancho = parseInt(ancho);
	//transformacion de texto a numero
	
	totalAlambre = (largo+largo+ancho+ancho)*3;
	//calculo de metros de alambre
	
	mensaje = "Se necesitan "+totalAlambre+" metros de alambre";
	//creacion del mensaje
	
	alert(mensaje); 

}
function Circulo () 
{
	var radio;
	var totalAlambre;
	var mensaje;
	//Definiendo variables
	
	radio = document.getElementById("txtIdRadio").value
	//Carga de dato
	
	radio = parseInt(radio);
	//transformacion de texto a numero
	
	totalAlambre = radio * 2 * 3.14 * 3
	//Calculo de metros de alambre
	
	mensaje = "Se necesitan "+totalAlambre+" metros de alambre";
	//creacion del mensaje
	
	alert(mensaje)
}
function Materiales () 
{
	var largo;
	var ancho;
	var cemento;
	var cal;
	var mensaje;
	//Definiendo variables
	
	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;
	//carga de datos
	
	largo = parseInt(largo);
	ancho = parseInt(ancho);
	//Transformacion de texto a numero
	
	cemento = largo * ancho * 2;
	cal = largo * ancho * 3;
	//Calculo para bolsas de cal y cemento
	
	mensaje = "Se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal";
	//creacion del mensaje
	
	alert(mensaje);


}