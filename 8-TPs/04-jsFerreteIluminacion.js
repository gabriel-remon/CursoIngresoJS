/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 
alumno: Remon Gabriel
Actuvidad: TP 04 solo SWICH

 */
 
function CalcularPrecio ()
{
    var cantidadLamparas;
    var marca;
    var precioFinal;
    var precioBase;
    var precioLampara;
    var porcentaje;
    var impuesto;
    var mensaje;

    precioBase=35;

    cantidadLamparas=document.getElementById("txtIdCantidad").value;
    cantidadLamparas=parseInt(cantidadLamparas);

    marca=document.getElementById("Marca").value;

    if(cantidadLamparas>5)
    {
        porcentaje=-50; //descuento del 50%
    }
    else
    {
        switch(cantidadLamparas)
        {
            case 5:
                if (marca=="ArgentinaLuz")
                {
                    porcentaje=-40; //descuento del 40%
                }
                else
                {
                    porcentaje=-30; //descuento del 30%
                }
            break;

            case 4:
                if (marca=="ArgentinaLuz" || marca=="FelipeLamparas")
                {
                    porcentaje=-25; //descuento del 25%
                }
                else
                {
                    porcentaje=-20; //descuento del 20%
                }
            break;

            case 3:
                switch(marca)
                {
                    case "ArgentinaLuz":
                        porcentaje=-15; //descuento del 15%
                    break;

                    case "FelipeLamparas":
                        porcentaje=-10; //descuento del 10%
                    break;

                    default:
                        porcentaje=-5; //descuento del 5%
                    break;
                }
            break;

            default:
                porcentaje=0; //sin descuento
            break;
        }
    }


    porcentaje=cantidadLamparas*precioBase*(porcentaje/100);
    precioFinal=cantidadLamparas*precioBase+porcentaje;

    if (precioFinal>120)
    {
        impuesto=precioFinal*0.1;
        precioFinal=precioFinal+impuesto;
        mensaje="El importe a abonar es de $"+precioFinal+" este valor tiene incluido $"+impuesto+" de IIBB";
    }
    else
    {
        mensaje="El importe a abonar es de $"+precioFinal;
    }

    document.getElementById("txtIdprecioDescuento").value=mensaje;

}  

