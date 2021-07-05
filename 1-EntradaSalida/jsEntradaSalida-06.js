/*
autor: Gabriel Remon
ejercicio: 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var a;
	var b;
	var resultado;
	//definir variable
	a=document.getElementById("txtIdNumeroUno").value;
	b=document.getElementById("txtIdNumeroDos").value;
	//carga de dato
	a=parseInt(a);
	b=parseInt(b);
	//comversion de texto a numero
	resultado=a+b;
	//suma de datos
	alert("La suma es "+resultado);

}

