/*

AUTOR: Remon Gabriel
ACTIVIDAD: Recu 2019_1Cuatri_Recu_fuentes/nueve.html

*/

function mostrar()
{
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var notaIngresada;
	
	var contadorVarones;
	var contadorMujeres;
	var totalNotasVarones;
	var totalNotasMujeres;
	var promedioMujeres;
	var promedioVarones;
	
	var varonesAprobados;
	
	var notaMenores;
	var notaAdolecentes;
	var notaMayores;
	var contadorMenores;
	var contadorAdolecentees;
	var contadorMayores;
	var promedioMenores;
	var promedioAdolecentes;
	var promedioMayores

	var bucle;
	var mensaje;

	varonesAprobados=0;
	contadorVarones=0;
	contadorMujeres=0;
	totalNotasMujeres=0;
	totalNotasVarones=0;
	notaMenores=0;
	notaAdolecentes=0;
	notaMayores=0;
	contadorMenores=0;
	contadorAdolecentees=0;
	contadorMayores=0;
	bucle=true;

	while(bucle)
	{
		nombreIngresado=prompt("Ingrese el nombre del estudiante");

		edadIngresada=prompt("Ingrese la edad del estudiante");
		while(edadIngresada<1 || edadIngresada>100 || isNaN(edadIngresada))
		{
			edadIngresada=prompt("Error Ingreser una edad entre 1 y 100");
		}
		edadIngresada=parseInt(edadIngresada);

		sexoIngresado=prompt("Ingrese el sexo (femenino o masculino)");
		while(sexoIngresado!="femenino" && sexoIngresado!="masculino")
		{
			sexoIngresado=prompt("Error Ingreser solo femenino o masculino");
		}

		notaIngresada=prompt("Ingrese la nota del examen final (entre 1 y 10)");
		notaIngresada=parseInt(notaIngresada);
		while(notaIngresada<1 || notaIngresada>10 ||isNaN(edadIngresada))
		{
			notaIngresada=prompt("Error Ingreser solo un numero entre 1 y 10");
			notaIngresada=parseInt(notaIngresada);
		}

		if(sexoIngresado=="masculino")
		{
			if(notaIngresada>5)
			{
				varonesAprobados++;
			}
			contadorVarones++
			totalNotasVarones=totalNotasVarones+notaIngresada;
		}
		else
		{
			contadorMujeres++;
			totalNotasMujeres=totalNotasMujeres+notaIngresada;
		}

		if(edadIngresada>17)
		{
			notaMayores=notaMayores+notaIngresada;
			contadorMayores++;
		}
		else
		{
			if(edadIngresada>12)
			{
				notaAdolecentes=notaAdolecentes+notaIngresada;
				contadorAdolecentees++;
			}
			else
			{
				notaMenores=notaMenores+notaIngresada;
				contadorMenores++;
			}
		}

		bucle=confirm("¿Desea continuar?");
	}

	promedioMenores=notaMenores/contadorMenores;
	promedioAdolecentes=notaAdolecentes/contadorAdolecentees;
	promedioMayores=notaMayores/contadorMayores;
	promedioMujeres=totalNotasMujeres/contadorMujeres;
	promedioVarones=totalNotasVarones/contadorVarones;

	mensaje="Aprobaron "+varonesAprobados+" varones <br>";
	mensaje=mensaje+"El promedio de notas de los menores de edad es: "+promedioMenores+"<br>";
	mensaje=mensaje+"El promedio de notas de los adolecentes es: "+promedioAdolecentes+"<br>";
	mensaje=mensaje+"El promedio de notas de los mayores de edad es: "+promedioMayores+"<br>";
	mensaje=mensaje+"El promedio de notas de las mujeres es: "+promedioMujeres+"<br>";
	mensaje=mensaje+"El promedio de notas de los varones es: "+promedioVarones;

	document.write(mensaje);

}
