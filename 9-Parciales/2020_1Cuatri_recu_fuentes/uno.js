
function mostrar()
{
	var tipoIngreso;
	var precioIngreso;
	var cantidadIngreso;
	var marca;
	var banderaAlcohol;
	var contador;
	var alcoholBarato;
	var marcaAlcohol;
	var cantidadAlcohol;
	var cantidadJabon;

	cantidadJabon=0;
	contador=0;
	banderaAlcohol=true;

	while(contador<5)
	{
		contador++;
		tipoIngreso=prompt("Ingrese el "+contador+"º tipo de producto(barbijo, jabon o alcohol)");
		while(tipoIngreso!="barbijo" && tipoIngreso!="jabon" && tipoIngreso!=alcohol)
		{
			tipoIngreso=prompt("Error ingrese un producto valido(barbijo, jabon o alcohol)");
		}

		precioIngreso=prompt("Ingrese su precio(entre 100 y 300)");
		precioIngreso=parseInt(precioIngreso);
		while(!(precioIngreso>99 && precioIngreso<301))
		{
			precioIngreso=prompt("Error, ingrese un precio entre 100 y 300");
			precioIngreso=parseInt(precioIngreso);
		}

		cantidadIngreso=prompt("Ingrese cuantas unidades hay (entre 1 y 1000)");
		cantidadIngreso=parseInt(cantidadIngreso);
		while(!(cantidadIngreso>0 && cantidadIngreso<1001))
		{
			cantidadIngreso=prompt("Error, ingrese un numero entre 1 y 1000 ");
			cantidadIngreso=parseInt(cantidadIngreso);
		}

		marca=prompt("Ingrese la marca de este producto");

		if(tipoIngreso=="alcohol")
		{
			if(precioIngreso<alcoholBarato || banderaAlcohol)
			{
				alcoholBarato=precioIngreso;
				cantidadAlcohol=cantidadIngreso;
				marcaAlcohol=marca;
				banderaAlcohol=false;
			}
		}



		if(tipoIngreso=="jabon")
		{
			cantidadJabon=cantidadJabon+cantidadIngreso;
		}


	}

}
