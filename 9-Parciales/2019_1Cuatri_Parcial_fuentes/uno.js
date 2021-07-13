
/*
alumno: Gabriel remon
ejercicio : parcial 2019 01
*/
function mostrar()
{
  var base;
  var perimetro;
  var mensaje;

  base = prompt("Ingrese el tamaño de la base del triangulo en cm");
  base = parseInt(base);

  perimetro = base * 3;

  mensaje = "el perimetro de este triganulo equilatero es de " + perimetro + "cm";

  alert(mensaje);

}
 