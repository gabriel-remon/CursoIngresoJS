function mostrar()
{
  var tipoIngreso;
  var precioIngreso;
  var cantidadIngreso;
  var totalIngreso;
  var importeTotal;
  var precioFinal;
  var bucle;
  var descuento;

  var totalArena;
  var totalCal;
  var totalCemento;
  var bolsaMayor;

  var precioMayor;
  var tipoMayor;
  var primerIngreso;

  totalIngreso=0;
  importeTotal=0;
  primerIngreso=true;

  bucle=true;

  while(bucle)
  {
    tipoIngreso=prompt("Ingrese el tipo de prodructo(arena, cal o cemento)");
    while(tipoIngreso!="arena" && tipoIngreso!="cal"  && tipoIngreso!="cemento")
    {
      tipoIngreso=prompt("Error ingrese solo el dato, arena, cal o cemento");
    }

    cantidadIngreso=prompt("Ingrese cuantas bolsas comprara")
    cantidadIngreso=parseInt(cantidadIngreso);
    while(cantidadIngreso<0 || isNaN(cantidadIngreso))
    {
      cantidadIngreso=prompt("Error, ingrese un valor mayor a 0");
      cantidadIngreso=parseInt(cantidadIngreso);
    }

    precioIngreso=prompt("Ingrese el precio de cada bolsa");
    precioIngreso=parseInt(precioIngreso);
    while(precioIngreso<0 || isNaN(precioIngreso))
    {
      precioIngreso=prompt("Error, ingrese una mayor a 0");
      precioIngreso=parseInt(precioIngreso);
    }

    switch(totalIngreso)
    {
      case "arena":
        totalArena=totalArena+cantidadIngreso;
      break;

      case "cal":
        totalCal=totalCal+cantidadIngreso;
      break;

      default:
        totalCemento=totalCemento+cantidadIngreso;
      break;

    }

    if(precioIngreso>precioMayor || primerIngreso)
    {
      primerIngreso=false;
      precioMayor=precioIngreso;
      tipoMayor=tipoIngreso;
    }

    totalIngreso=totalIngreso+cantidadIngreso;
    importeTotal=importeTotal+precioIngreso;


    bucle=confirm("Desea ingresar mas productos?");

  
  }

  if(totalIngreso>30)
  {
    descuento=25;
  }
  else
  {
    if (totalIngreso>15)
    {
      descuento=15;
    }
    else
    {
      descuento=0;
    }
  }

  if(totalCal>totalCemento && totalCal>totalArena)
  {
    bolsaMayor="cal";
  }
  else
  {
    if(totalCemento>totalArena)
    {
      bolsaMayor="cemento";
    }
    else
    {
      bolsaMayor="arena";
    }
  }

  precioFinal=importeTotal*totalIngreso

  if(descuento>0)
  {
     descuento=precioFinal*(descuento/100);
     precioFinal=precioFinal-descuento;
     mensaje="El importe a pagar (con descuento) es $"+precioFinal+"\n";
  }
  else
  {
    mensaje="El importe total a pagar es $"+precioFinal+"\n";
  }


  mensaje=mensaje+"El producto con mayor cantidad de bolsa compradas fue: "+bolsaMayor+"\n";
  mensaje=mensaje+"El producto mas caro es: "+tipoMayor;
  
  alert(mensaje);

    
}
