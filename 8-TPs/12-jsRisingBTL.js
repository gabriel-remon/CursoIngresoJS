/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 
alumno: Remon Gabriel
Actuvidad: TP 12

 */
function ComenzarIngreso () 
{
    var datoIngresado;
    var mensaje;
    var edad;
    var sexo;
    var estadoCivil;
    var sueldo;
    var legajo;
    var nacionalidad;
    var contador;

    edad=prompt("Ingrese una edad entre 18 y 90");
    edad=parseInt(edad);

    while(edad<18 || edad>90)
    {
        edad=prompt("Error, edad ingresada no valida (Ingrese una edad entre 18 y 90)");
    }

    edad="Edad: "+edad+" años";
    //------------------validar edad---------------------


    sexo=prompt("Ingrese un sexo (m-como masculino f-como femenino) ");

    while(sexo!="m" && sexo!="f")
    {
        sexo=prompt("Error, ingrese un sexo valido. Ingrese un sexo (m-como masculino f-como femenino) ");
    }

    if (sexo=="f")
    {
        sexo="Sexo: femenino";
    }
    else
    {
        sexo="sexo: Masculino";
    }
    //-------------validar sexo-----------------


    estadoCivil=prompt("Ingrese el estado civil (1-para soltero 2-para casado 3-para divorciado 4-para viudos)");

    while(estadoCivil!="1" && estadoCivil!="2" && estadoCivil!="3" && estadoCivil!= "4")
    {
        estadoCivil=prompt("Error,estadoCivil no valido. Ingrese el estado civil (1-para soltero 2-para casado 3-para divorciado 4-para viudos)")
    }

    switch(estadoCivil)
    {
        case "1":
            estadoCivil="Estado civil: Soltero";
        break;

        case "2":
            estadoCivil="Estado civil: Casado";
        break;

        case "3":
            estadoCivil="Estado civil: Divorciado";
        break;

        default:
            estadoCivil="Estado civil: Viudo";
        break;
    }
    //------------validar estado civil-------------


    sueldo=prompt("Ingrese un sueldo bruto mayor a 8000");    
    sueldo=parseInt(sueldo);

    while(sueldo<7999)
    {
        sueldo=prompt("Error, sueldo no valido. Ingrese un sueldo bruto mayor a 8000");
    }


    sueldo="El sueldo bruto: $"+sueldo;
    //-----------------validar sueldo------------------


    legajo=prompt("Ingrese el numero de legajo con 4 cifras y sin 0 a la izquierda");
    legajo=parseInt(legajo);

    while(legajo<1000 || legajo>999)
    {
        legajo=prompt("Error numero de legajo no valido. Ingrese el numero de legajo con 4 cifras y sin 0 a la izquierda");
    }

    legajo="Numero de legajo: "+legajo;
    //----------------validar legajo----------------------


    nacionalidad=prompt("Ingrese la nacionalidad (A-para argenino E-para extranjero N-para nacionalizados)");

    while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
    {
        nacionalidad=prompt("Error dato no valido. Ingrese la nacionalidad (A-para argenino E-para extranjero N-para nacionalizados)");
    } 

    switch(nacionalidad)
    {
        case "A":
            nacionalidad="Es Argentino";
        break;

        case "E":
            nacionalidad="Es extranjero";
        break;

        default:
            nacionalidad="Es nacionalizado";
        break;
    }
    //------------------validando nacionalidad--------------------

    document.getElementById("txtIdEdad").value=edad;
    document.getElementById("txtIdSexo").value=sexo;
    document.getElementById("txtIdEstadoCivil").value=estadoCivil;
    document.getElementById("txtIdSueldo").value=sueldo;
    document.getElementById("txtIdLegajo").value=legajo;
    document.getElementById("txtIdNacionalidad").value=nacionalidad;

}
