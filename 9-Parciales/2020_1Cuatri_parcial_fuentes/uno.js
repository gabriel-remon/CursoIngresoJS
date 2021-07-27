/*

AUTOR: Remon Gabriel
ATIVIDAD: parcial 2020 UNO punto A+B+C

*/



function mostrar()
{
	var tipoIngreso;
	var precioIngreso;
	var cantidadIngreso;
	var marca;
	var fabricante;
	var contador;
	var alcoholBarato;
	var marcaAlcohol;
	var fabricanteAlcohol;
	var cantidadAlcohol;

	var totalAlcohol;
	var totalBarbijo;
	var totalJabon;
	var contadorAlcohol;
	var contadorBarbijo;
	var contadorJabon;
	var mensajePromedio;
	var promedio;

	var mensaje;

	cantidadJabon=0;
	contador=0;
	totalAlcohol=0;
	totalBarbijo=0;
	totalJabon=0;
	contadorJabon=0;
	contadorBarbijo=0;
	contadorAlcohol=0;

	while(contador<5)
	{
		contador++;
		tipoIngreso=prompt("Ingrese el "+contador+"º tipo de producto(barbijo, jabon o alcohol)");
		while(tipoIngreso!="barbijo" && tipoIngreso!="jabon" && tipoIngreso!="alcohol")
		{
			tipoIngreso=prompt("Error ingrese un producto valido(barbijo, jabon o alcohol)");
		}

		precioIngreso=prompt("Ingrese su precio(entre 100 y 300)");
		precioIngreso=parseInt(precioIngreso);
		while(precioIngreso<99 || precioIngreso>301 || isNaN(precioIngreso))
		{
			precioIngreso=prompt("Error, ingrese un precio entre 100 y 300");
			precioIngreso=parseInt(precioIngreso);
		}

		cantidadIngreso=prompt("Ingrese cuantas unidades hay (entre 1 y 1000)");
		cantidadIngreso=parseInt(cantidadIngreso);
		while(cantidadIngreso<0 || cantidadIngreso>1001 || isNaN(cantidadIngreso))
		{
			cantidadIngreso=prompt("Error, ingrese un numero entre 1 y 1000 ");
			cantidadIngreso=parseInt(cantidadIngreso);
		}

		marca=prompt("Ingrese la marca de este producto");
		fabricante=prompt("Ingrerse el fabricante");

		if (precioIngreso)
		{

		}

		switch(tipoIngreso)
		{
			case "alcohol":
				totalAlcohol=totalAlcohol+cantidadIngreso;
				contadorAlcohol++;

				if(precioIngreso<alcoholBarato || contadorAlcohol==1)
				{
					alcoholBarato=precioIngreso;
					cantidadAlcohol=cantidadIngreso;
					fabricanteAlcohol=fabricante;
					marcaAlcohol=marca;

				}
			break;

			case "barbijo":
				totalBarbijo=totalBarbijo+cantidadIngreso;
				contadorBarbijo++;
			break;

			default:
				totalJabon=totalJabon+cantidadIngreso;
				contadorJabon++;
			break;


		}

	}

	if(totalAlcohol>totalBarbijo && totalAlcohol>totalJabon)
	{
		promedio=totalAlcohol/contadorAlcohol;
		mensajePromedio="alcohol";
	}
	else
	{
		if(totalBarbijo>totalJabon )
		{
			promedio=totalBarbijo/contadorBarbijo;
			mensajePromedio="barbijo";
		}
		else
		{
			promedio=totalJabon/contadorJabon;
			mensajePromedio="Jabon";
		}
	}
	mensaje="El alcohol mas barato es: \n";
	mensaje=mensaje+"Marca: "+marcaAlcohol+"\n";
	mensaje=mensaje+"fabricante: "+fabricanteAlcohol+"\n";
	mensaje=mensaje+"Cuenta con "+cantidadAlcohol+" unidades \n";
	mensaje=mensaje+"Tiene un costo de $"+alcoholBarato+" por unidad \n \n";
	mensaje=mensaje+"El producto con mas unidades es el "+mensajePromedio+" con un promedio de "+promedio+" unidades por compra \n \n";
	mensaje=mensaje+"Hay un total de "+totalJabon+" unidades de jabones";


	alert(mensaje); 

}
