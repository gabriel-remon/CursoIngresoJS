/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 
alumno: Remon Gabriel
Actuvidad: TP 04

 */
 
function CalcularPrecio ()
{
    
}



































/*
{
    var precioLampara;
    var cantidad;
    var descuento;
    var marca;
    var precioFinal;
    var impuestos;
    var mensaje;
    //declarando variables

    precioLampara=35;
    //precio base de lamparas

    cantidad=document.getElementById("txtIdCantidad").value;
    cantidad=parseInt(cantidad);
    //carga dato cantidad de lamparas

    marca=document.getElementById("Marca").value;
    //carga de la marca 

    if(cantidad>5)
    {
        descuento=0.5; //descuento del 50%
    }
    //si compra 6 o mas lamparas

    else
    {
        if (cantidad==5)
        {
            if(marca=="ArgentinaLuz")
            {
                descuento=0.6; //descuento del 40%
            }
            else
            {
                descuento=0.7; //descuento del 30%
            }
        }
        //si compra 5 lamparas

        else
        {
            if(cantidad==4)
            {
                if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
                {
                    descuento=0.75; //descuentop del 25%
                }
                else
                {
                    descuento=0.8; //descuento del 20%
                }
            }
            //si compra 4 lamparas

            else
            {
                if(cantidad==3)
                {
                    if(marca=="ArgentinaLuz")
                    {
                        descuento=0.85; //descuento del 15%
                    }
                    else
                    {
                        if(marca=="FelipeLamparas")
                        {
                            descuento=0.9; //descuento del 10%
                        }
                        else
                        {
                            descuento=0.95; //descuento del 5%
                        }
                    }
                }
                //si compra 3 lamparas

                else
                {
                    descuento=1; //sin descuento
                }
                //si compra menos de 3 lamparas
            }
            //decision de 3 lamparas o menos 
        }
        //decision de 4 lamparas o menos
    }
    //decision de 5 lamparas o menos

    precioFinal=precioLampara*cantidad*descuento;
    //calculo del precio 

    if(precioFinal>120)
    {
        impuesto=precioFinal*0.1;
        precioFinal=impuesto+precioFinal;
        mensaje="Importe a abonar: $" + precioFinal + ".Usted esta pagando $"+impuesto+"de IIBB";
    }
    //suma del impuesto

    else
    {
        mensaje="Importe a abonar: $"+precioFinal;
    }
    //precio sin impuestos

    document.getElementById("txtIdprecioDescuento").value=mensaje;
}
*/