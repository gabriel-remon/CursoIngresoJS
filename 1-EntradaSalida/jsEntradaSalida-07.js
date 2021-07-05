/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var a;
	var b;
	var resultado;
	a=document.getElementById("txtIdNumeroUno").value;
	b=document.getElementById("txtIdNumeroDos").value;
	a=parseInt(a);
	b=parseInt(b);
	resultado = a+b
	alert("la suma da "+resultado);	
}

function restar()
{
	var a;
	var b;
	var resultado;
	a=document.getElementById("txtIdNumeroUno").value;
	b=document.getElementById("txtIdNumeroDos").value;
	a=parseInt(a);
	b=parseInt(b);
	resultado = a-b;
	alert("la resta es "+resultado);
	
}

function multiplicar()
{ 
	var a;
	var b;
	var resultado;
	a=document.getElementById("txtIdNumeroUno").value;
	b=document.getElementById("txtIdNumeroDos").value;
	a=parseInt(a);
	b=parseInt(b);
	resultado = a*b;
	alert("la multiplicacion es "+resultado);
	
}

function dividir()
{
	var a;
	var b;
	var resultado;
	a=document.getElementById("txtIdNumeroUno").value;
	b=document.getElementById("txtIdNumeroDos").value;
	a=parseInt(a);
	b=parseInt(b);
	resultado = a/b;
	alert("la division es "+resultado);
}

