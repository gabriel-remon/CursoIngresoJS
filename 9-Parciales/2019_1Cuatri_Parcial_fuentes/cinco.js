/*
alumno: Gabriel remon
ejercicio : parcial 2019 05
*/


function mostrar()
{
	var formaPago;
	var cantidadDias;
	var destino;
	var descuento;
	var medioPago;
	var mensaje;
	var precioDia;
	var precioFinal;

	precioDia=100; //valor base de cada dia

	destino=document.getElementById("Marca").value;
	medioPago=prompt("Agregar medio de pago");		

	cantidadDias=prompt("ingrese la cantidad de dias que desea vijar");
	cantidadDias=parseInt(cantidadDias);

	if(destino=="América")
	{
		if(medioPago=="debito")
		{
			descuento=0.4; //descuento del 60%
		}
		else
		{
			descuento=0.5; //descuento del 50%
		}
	}
	//si se viaja a america

	
	else
	{
		if(destino=="África")
		{
			if(medioPago=="mercado pago" || medioPago=="efectivo")
			{
				descuento=0.25; //descuento del 75%
			}
			else
			{
				descuento=0.4; //descuento del 60%
			}
		}
		//si se viaja a africa

		else
		{
			if(destino=="Europa")
			{
				if(medioPago=="debito")
				{
					descuento=0.65; //descuento del 35%
				}
				else
				{
					if(medioPago=="mercado pago")
					{
						descuento=0.7; //descuento del 30%
					}
					else
					{
						descuento=0.75; //descuento del 25%
					}
				}
			}
			//si se viaja a europa

			else
			{
				descuento=1.2; //recargo del 20%
			}
			//si es otro destino
		}
	}

	precioFinal=precioDia*cantidadDias*descuento;
	//calculo del precio a abonar

	mensaje="El valor total de viaje es de $"+precioFinal;

	alert(mensaje);

}
