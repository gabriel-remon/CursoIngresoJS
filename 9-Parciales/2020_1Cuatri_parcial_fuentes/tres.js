function mostrar()
{
	var nombreIngreso;
	var edadIngreso;
	var sexoIngreso;
	var estadoCivilIngreso;
	var temperaturaIngreso;

	var temperaturaMayor;
	var nombreTemperaturaMayor;
	var primerIngreso;

	var contadorViudos;

	var contadorHombreSoltero;
	var contadorHombreViudo;

	var viejosConFiebre;
	var totalEdadSolteros;
	var promedioEdadSolteros;

	var bucle;
	var mensaje;

	contadorHombreCasado=0;
	contadorHombreSoltero=0;
	contadorHombreViudo=0;
	contadorViudos=0;
	viejosConFiebre=0;
	totalEdadSolteros=0;
	bucle=true;
	primerIngreso=true;

	while(bucle)
	{
		nombreIngreso=prompt("Ingrese el nombre del pasajero");

		edadIngreso=prompt("Ingrese la edad del pasajero");
		edadIngreso=parseInt(edadIngreso);
		while(edadIngreso<1 || edadIngreso>150 || isNaN(edadIngreso))
		{
			edadIngreso=prompt("Error ingrese una edad entre 1 y 150");
			edadIngreso=parseInt(edadIngreso);
		}

		sexoIngreso=prompt("Ingrese el sexo del pasajero (f-femenino o m-masculino)");
		while(sexoIngreso!="f" && sexoIngreso!="m")
		{
			sexoIngreso=prompt("Error ingrese solo m o f");
		}

		estadoCivilIngreso=prompt("Ingrese el estado civil de pasajero (soltero, casado o viudo)")
		while(estadoCivilIngreso!="soltero" && estadoCivilIngreso!="casado" && estadoCivilIngreso!="viudo")		
		{	
			estadoCivilIngreso=prompt("Error ingrese solo, casaso, soltero o viudo");
		}

		temperaturaIngreso=prompt("Ingrese la temperatura corporal de la persona");
		temperaturaIngreso=parseInt(temperaturaIngreso);
		while(temperaturaIngreso<30 || temperaturaIngreso>50 || isNaN(temperaturaIngreso))
		{
			temperaturaIngreso=prompt("Error ingrese una temperatura entre 30 y 50");
			temperaturaIngreso=parseInt(temperaturaIngreso);
		}

		if(temperaturaIngreso>temperaturaMayor || primerIngreso )
		{
			primerIngreso=false;
			temperaturaMayor=temperaturaIngreso;
			nombreTemperaturaMayor=nombreIngreso;
		}


		if(edadIngreso>17)
		{
			if(estadoCivilIngreso=="viudo")
			{
				contadorViudos++;
			}
		
			if(edadIngreso>60 && temperaturaIngreso>38)
			{
				viejosConFiebre++;
			}
		}

		if(sexoIngreso=="m")
		{
			switch(estadoCivilIngreso)
			{
				case "soltero":
					contadorHombreSoltero++;
					totalEdadSolteros=totalEdadSolteros+edadIngreso;

				break;

				case "viudo":
					contadorHombreViudo++;
				break;

			}
		}


		bucle=confirm("¿Desea continuar?");
	}

	promedioEdadSolteros=totalEdadSolteros/contadorHombreSoltero;

	mensaje="La peronsa con mas temperatura es "+nombreTemperaturaMayor+"\n";
	mensaje=mensaje+"Hay "+contadorViudos+" persona mayores de edad viudas \n";
	mensaje=mensaje+"Hay "+contadorHombreSoltero+" hombres solteros \n";
	mensaje=mensaje+"Hay "+contadorHombreViudo+" hombres viudos \n";
	mensaje=mensaje+"Hay "+viejosConFiebre+" peronsa de mas de 60 años con mas de 38º de temperatura \n";
	mensaje=mensaje+"La edad promedio entre los hombres solteros es: "+promedioEdadSolteros+" años";

	alert(mensaje);
}
