function mostrar()
{
  var tipoIngreso;
  var cantidadIngreso;
  var precioIngreso;

  var contadorCemento;
  var contadorCal;
  var contadorArena;
  var cantidadMayor;

  var bucle;
  var primerIngreso;

  var precioMayor;
  var tipoMayor;

  var descuento;

  var precioFinal;
  var precioDescuento;

  bucle=true;
  primerIngreso=true;
  contadorCemento=0;
  contadorCal=0;
  contadorArena=0;


    while(bucle)
    {
      tipoIngreso=prompt("Ingrese el tipo de producto(cemento, cal o arena)");
      tipoIngreso=parseInt(tipoIngreso);
      while(tipoIngreso=!"arena" && tipoIngreso!="cemento" && tipoIngreso!="cal")
      {
        tipoIngreso=prompt("error solo ingrerse cemento, cal o arena");
        tipoIngreso=parseInt(tipoIngreso);
      }

      precioIngreso=prompt("ingrese el precio");
      precioIngreso=parseInt(precioIngreso);
      while(precioIngreso<1 || isNaN(precioIngreso))
      {
        precioIngreso=prompt("Error ingrese un precio mayor a 0");
        precioIngreso=parseInt(precioIngreso);
      }

      cantidadIngreso=prompt("Ingrese la cantidad de bolsas");
      cantidadIngreso=parseInt(cantidadIngreso);
      while(cantidadIngreso<1 || isNaN(cantidadIngreso))
      {
        cantidadIngreso=prompt("Error ingrese un numero mayor a 0");
        cantidadIngreso=parseInt(cantidadIngreso);
      }
    }
    switch(tipoIngreso)
    {
      case "cal":
        contadorCal=contadorCal+cantidadIngreso;
      break;

      case "cemeto":
        contadorCemento=contadorCemento+cantidadIngreso;
      break;

      default:
        contadorArena=contadorArena+cantidadIngreso;
      break;
    }
}
