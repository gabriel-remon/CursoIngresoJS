/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	var bucle;
	var mensaje;

	bucle=0;

	while(bucle==0)
	{
		numeroIngresado=prompt("ingrese un numero entre el 0 y el 9");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado==0 || numeroIngresado<10)
		{
			mensaje= "Dato correcto";
			bucle=1;
		}
		else
		{
			mensaje= "Codigo no valido";
		}
		document.getElementById("txtIdNumero").value=mensaje;
	
	}
	
}//FIN DE LA FUNCIÓN