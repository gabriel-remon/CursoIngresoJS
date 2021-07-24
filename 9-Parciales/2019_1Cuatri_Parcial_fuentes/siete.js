/*
alumno: Gabriel remon
ejercicio : parcial 2019 07
*/


function mostrar()
{
	var alturaIngresada;
	var sexoIngresado;
	var alturaTotal;
	var alturaPromedio;
	var alturaMinima;
	var mujeresAltas;
	var personaBaja;
	var contador;
	var mensaje;

	contador=0;
	mujeresAltas=0;
	alturaTotal=0;

	while(contador<5)
	{	
		contador++;
		
		alturaIngresada=prompt("ingrese la altura en centimetros de la "+contador+"º persona" );
		alturaIngresada=parseInt(alturaIngresada);

		while(!(alturaIngresada>-1 && alturaIngresada<251))
		{
			alturaIngresada=prompt("Altura ingresada no valida. ingrese un valor entre 0 y 250");
		}


		sexoIngresado=prompt("Ingrerse el sexo de la "+contador+"º persona(f-femenino m-masculino )");

		while(sexoIngresado!="m" && sexoIngresado!="f")
		{
			sexoIngresado=prompt("sexo no valido. ingrese f para femenino y m para masculino");
		}

		alturaTotal=alturaTotal+alturaIngresada;

		if(contador==1)
		{
			alturaMinima=alturaIngresada;
			personaBaja=sexoIngresado;
		}
		else
		{
			if(alturaIngresada<alturaMinima)
			{
				alturaMinima=alturaIngresada;
				personaBaja=sexoIngresado;
			}

		}
		if(sexoIngresado=="f" && alturaIngresada>190)
		{
			mujeresAltas++;
		}

	}	

	alturaPromedio=alturaTotal/contador;

	if(personaBaja=="f")
	{
		personaBaja="mujer";
	}
	else
	{
		personaBaja="hombre";
	}

	mensaje="La altura promedio es de "+alturaPromedio+" cm \n";
	mensaje=mensaje+"la persona mas baja mide "+alturaMinima+" cm de alto y es "+personaBaja+"\n";
	mensaje=mensaje+"Hay "+mujeresAltas+" mujeres que superan los 190 cm";

	alert(mensaje);

}
