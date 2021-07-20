/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. 

alumno: Remon Gabriel
Actuvidad: TP 10

 */
var resultado;
var temporizador;
function comenzar()
{
    var primerNumero;
    var segundoNumero;
    var operacion;
    var mensaje;

    primerNumero=random(10);
    segundoNumero=random(10);
    operacion=random(4);
    operacion=traductorOperacion(primerNumero,segundoNumero,operacion);

    mensaje="Empezo el juego, Solo tiene 4 segundos para responder";

    document.getElementById("txtIdPrimerNumero").value=primerNumero;
    document.getElementById("txtIDSegundoNumero").value=segundoNumero;
    document.getElementById("txtIdOperador").value=operacion;

    alert(mensaje);

    temporizador=setInterval(Responder, 4000);
	
}

function random(max)
{
    var random;
    var max;

    random=Math.floor(Math.random()*max);

    return random;
}

function traductorOperacion(variable1,variable2,variableOperacion)
{
    var variable1;
    var variable2;
    var variableOperacion;
    var operacionSalida;

    switch(variableOperacion)
    {
        case 0:
            operacionSalida="+";
            resultado=variable1+variable2;
        break;

        case 1:
            operacionSalida="-";
            resultado=variable1-variable2;
        break;

        case 2:
            operacionSalida="*";
            resultado=variable1*variable2;
        break;

        default:
            operacionSalida="/";
            resultado=variable1/variable2;
        break;
    }

    resultado=Math.floor(resultado);

    return operacionSalida;
}

function Responder()
{
	var numeroIngresado;
    var mensajeRespuesta;

    numeroIngresado=document.getElementById("txtIdRespuesta").value;
    numeroIngresado=parseInt(numeroIngresado);

    if(numeroIngresado==resultado)
    {
        mensajeRespuesta="felicidades!! ese es el resultado";
    }
    else
    {
        mensajeRespuesta="Error, resultado equivocado";
    }

    clearTimeout(temporizador);

    alert(mensajeRespuesta);

    comenzar();


}