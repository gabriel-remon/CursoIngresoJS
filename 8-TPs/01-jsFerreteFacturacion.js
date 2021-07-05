/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var a;
	var b;
	var c;
	var final;
	a=document.getElementById("txtIdPrecioUno").value;
	b=document.getElementById("txtIdPrecioDos").value;
	c=document.getElementById("txtIdPrecioTres").value;
	a=parseInt(a);
	b=parseInt(b);
	c=parseInt(c);
	final=a+b+c;
	alert("facturacion total = "+final);

}
function Promedio () 
{
	
	var a;
	var b;
	var c;
	var promedio;
	a=document.getElementById("txtIdPrecioUno").value;
	b=document.getElementById("txtIdPrecioDos").value;
	c=document.getElementById("txtIdPrecioTres").value;
	a=parseInt(a);
	b=parseInt(b);
	c=parseInt(c);
	promedio=a+b+c;
	promedio=promedio/3;
	alert("Promedio total = "+promedio);
}
function PrecioFinal () 
{
	var a;
	var b;
	var c;
	a=document.getElementById("txtIdPrecioUno").value;
	b=document.getElementById("txtIdPrecioDos").value;
	c=document.getElementById("txtIdPrecioTres").value;
	a=parseInt(a);
	b=parseInt(b);
	c=parseInt(c);
	a=a*1.21;
	b=b*1.21;
	c=c*1.21;
	alert("precios con iva incluidos");
	document.getElementById("txtIdPrecioUno").value=a;
	document.getElementById("txtIdPrecioDos").value=b;
	document.getElementById("txtIdPrecioTres").value=c;

}