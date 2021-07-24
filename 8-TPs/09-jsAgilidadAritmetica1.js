/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.

alumno: Remon Gabriel
Actuvidad: TP 09

*/
    var numero1;
    var operacion;
    var numero2;
    var resultado;

function comenzar()
{
    numero1 = numeroRandom(10);
    numero2 = numeroRandom(10);
    operacion = numeroRandom(4);
    operacion = verificadorOperacion(numero1,numero2,operacion);

    document.getElementById("txtIdPrimerNumero").value= numero1;
    document.getElementById("txtIdOperador").value= operacion;
    document.getElementById("txtIdSegundoNumero").value= numero2;
    alert("ingresar el resultado sin decimales");
}

function Responder()
{   
    var respuestaUsuario;
    var mensaje;

    respuestaUsuario = document.getElementById("txtIdRespuesta").value;
    respuestaUsuario = parseInt(respuestaUsuario);

    document.getElementById("txtIdRespuesta").value="";

    if(respuestaUsuario == resultado)
    {
        mensaje = "Felicidades es correcta";
    }
    else
    {
        mensaje = "Respuesta incorrecta, volve a intentarlo";
    }

    alert(mensaje);

    comenzar();
}




function numeroRandom(max)
{
    var random;

    random = Math.random();
    random = Math.floor(random * max +1);
    
    return random;
}
//funcion de numero random, "max" define hasta que numero llegara



function verificadorOperacion(variable1, variable2,variableOperacion)
{
    var variable1;
    var variable2;
    var variableOperacion;
    var operacion;

    switch(variableOperacion)
    {
        case 1:
        operacion="+";
        resultado = variable1 + variable2;
        break;

        case 2:
        operacion="-";
        resultado = variable1 - variable2;
        break;

        case 3:
        operacion="*";
        resultado = variable1 * variable2 ;
        break;

        default:
        operacion="/";
        resultado = variable1 / variable2;
        resultado = parseInt(resultado); 
        break;
    }

    return operacion;
}
