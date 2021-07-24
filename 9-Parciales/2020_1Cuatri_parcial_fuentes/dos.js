function mostrar()
{
  var tipoIngreso;
  var precioIngreso;
  var cantidadIngreso;
  var bucle;

  bucle=true;

  while(bucle)
  {
    tipoIngreso=prompt("Ingrese el tipo de prodructo(arena, cal o cemento)");
    while(tipoIngreso!="arena" && tipoIngreso!="cal"  &&tipoIngreso!="cemento")
    {
      tipoIngreso=prompt("Error ingrese solo el dato, arena, cal o cemento");
    }

    cantidadIngreso=prompt("Ingrese cuantas bolsas comprara")
    cantidadIngreso=parseInt(cantidadIngreso);
    while(!(cantidadIngreso>0))
    {
      cantidadIngreso=prompt("Error, ingrese un valor mayor a 0");
      cantidadIngreso=parseInt(cantidadIngreso);
    }

    precioIngreso=prompt("ingrese el precio de cada bolsa");
    precioIngreso=parseInt(precioIngreso);
    while(precioIngreso<0)
    {
      
    }

  
  }

    
}
