/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var a;
	var b;
	var resto;
	a=document.getElementById("txtIdNumeroDividendo").value;
	b=document.getElementById("txtIdNumeroDivisor").value;
	a=parseInt(a);
	b=parseInt(b);
	resto=a%b;
	alert("el resto es "+resto);
}
