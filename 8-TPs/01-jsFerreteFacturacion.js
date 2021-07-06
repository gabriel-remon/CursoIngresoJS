/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var total;
	var mensaje;
	//Definiendo variables

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;
	//Carga de datos

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);
	//Transformando texto a numero

	total = precioUno + precioDos + precioTres;
	//Suma de todos los precios

	mensaje = "facturacion total = "+total; 
	alert(mensaje);

}


function Promedio () 
{
	
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;
	var mensaje;
	//Definiendo variables

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;
	//Carga de datos

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);
	//Transformando texto a numero

	promedio = (precioUno + precioDos + precioTres) / 3;
	//promedio de los tres precios

	alert("Promedio total = "+promedio);
}


function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var preciofinalUno;
	var precioFinalDos;
	var precioFinalTres;
	var mensaje;
	//Definiendo variables

	precioUno = document.getElementById("txtIdPrecioUno").value;
	precioDos = document.getElementById("txtIdPrecioDos").value;
	precioTres = document.getElementById("txtIdPrecioTres").value;
	//Carga de datos

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);
	//Transformando texto a numero

	preciofinalUno = precioUno * 1.21;
	precioFinalDos = precioDos * 1.21;
	precioFinalTres = precioTres * 1.21;
	//suma del iva (21%) a los productos

	alert("precios con iva incluidos");
	//mensaje opcion

	document.getElementById("txtIdPrecioUno").value = preciofinalUno;
	document.getElementById("txtIdPrecioDos").value = precioFinalDos;
	document.getElementById("txtIdPrecioTres").value = precioFinalTres;

}