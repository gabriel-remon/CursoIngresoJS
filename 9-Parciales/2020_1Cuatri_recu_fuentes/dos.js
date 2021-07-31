function mostrar()
{
  var tipoIngreso;
  var CantidadBolsasIngreso;
  var precioIngresado;

  var precioTotal;
  var totalBolsas;
  var descuento;

  var totalPagar;
  var precioDescuento;

  var contadorCal;
  var contadorArena;
  var ContadorCemento;
  var tipoMayor
  var bolsaMayor;

  var tipoCaro;
  var precioCaro;

  var bucle;

  bucle=true;
  primerIntento=true;
  totalBolsas=0;
  precioIngreso=0;
  contadorCal=0;
  contadorArena=0;
  ContadorCemento=0;
  precioTotal=0;


  while(bucle)
  { 
    tipoIngreso=prompt("Ingrese el tipo de producto(arena, cal o cemento)");
    while(tipoIngreso!="arena" && tipoIngreso!="cal" && tipoIngreso!="cemento")
    {
      tipoIngreso=prompt("Error, solo ingrerse cal arena o cemento");
    }

    CantidadBolsasIngreso=prompt("ingrese la cantidad de bolsas");
    CantidadBolsasIngreso=parseInt(CantidadBolsasIngreso);
    while(CantidadBolsasIngreso<1 || isNaN(CantidadBolsasIngreso))
    {
      CantidadBolsasIngreso=prompt("Error, ingrese un numero mayo a 1");
      CantidadBolsasIngreso=parseInt(CantidadBolsasIngreso);
    }

    precioIngreso=prompt("Ingrese el precio por bolsa");
    precioIngreso=parseInt(precioIngreso);
    while(precioIngreso<1 || isNaN(precioIngreso))
    {
      precioIngreso=prompt("Error, ingrese un valor mayor a 0");
      precioIngreso=parseInt(precioIngreso);
    }

    totalBolsas=totalBolsas+CantidadBolsasIngreso;
    precioTotal=precioTotal+precioIngreso*CantidadBolsasIngreso;

    if(precioIngreso>precioCaro || primerIntento)
    {
      primerIntento=false;
      precioCaro=precioIngreso;
      tipoCaro=tipoIngreso;
    }

    switch(tipoIngreso)
    {
      case "arena":
        contadorArena=contadorArena+CantidadBolsasIngreso;
      break;

      case "cal":
        contadorCal=contadorCal+CantidadBolsasIngreso;
      break;

      default:
        ContadorCemento=ContadorCemento+CantidadBolsasIngreso;
      break;
    }

  
    bucle=confirm("¿Desea continuar?")
  }

  if(contadorCal>contadorArena && contadorCal>ContadorCemento)
  {
    tipoMayor="cal";
    bolsaMayor=contadorCal;
  }
  else
  {
    if (contadorArena>ContadorCemento) 
    {
      tipoMayor="arena";
      bolsaMayor=contadorArena;
    }
    else
    {
      tipoMayor="cemento";
      bolsaMayor=ContadorCemento;
    }
  }
  if(totalBolsas>30)
  {
    descuento=25;
  }
  else
  {
    if(totalBolsas>10)
    {
      descuento=15;
    }
    else
    {
      descuento=0;
    }
  }

  if(descuento=0)
  {
    mensaje="El importe final es: $"+precioTotal+"\n";
  }
  else
  {
    descuento=precioTotal*(descuento/100);
    precioDescuento=precioTotal-descuento;
    mensaje="El importe a pagar (con descuento es): $"+precioDescuento+"\n";
  }

  mensaje=mensaje+"El producto, "+tipoMayor+", es el producto con mas unidades. Con "+bolsaMayor+" unidades \n";
  mensaje=mensaje+"El producto mas caro es: "+tipoCaro;

  alert(mensaje);


}
