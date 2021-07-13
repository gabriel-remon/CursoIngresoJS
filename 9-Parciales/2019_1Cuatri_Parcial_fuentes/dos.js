/*
alumno: Gabriel remon
ejercicio : parcial 2019 02
*/

function mostrar()
{
  var nombre1;
  var nombre2;
  var peso1;
  var peso2;
  var pesoPromedio;
  var pesoTotal;
  var mensaje;

  nombre1 = prompt("ingrese el nombre de la primera persona");
  peso1 = prompt("ingrese su peso");
  peso1 = parseInt(peso1);

  nombre2 = prompt("Ingrese el nombre de la segunda persona");
  peso2 = prompt("ingrese su peso");
  peso2 = parseInt(peso2);

  pesoTotal = peso1 + peso2;

  pesoPromedio = pesoTotal / 2;

  mensaje = "Ustedes se llaman " + nombre1 + " y " + nombre2 + " pesan " + peso1 + " y " + peso2 + " kilos, que sumados son " + pesoTotal + " kilos y el promedio de peso es " + pesoPromedio + "kilos";

  alert(mensaje);

}
