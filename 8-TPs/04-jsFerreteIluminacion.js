/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLampara;
    var marca;
    var descuento;
    var precio;
    var precioImpuesto ;
    var precioBase;
    var mensaje;
    //Declarancion de variables

    precioImpuesto = 0;
    descuento = 1;
    precioBase = 35;
    //valores base 

    cantidadLampara = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    //carga de datos

    cantidadLampara = parseInt(cantidadLampara);
    //comvercion de texto a numero

    cantidadLampara = Math.floor(cantidadLampara);
    //definiendo lampara como un numero entero sin decimales

    if (cantidadLampara >= 6)
    {
        descuento = 0.5; //50% de descuento
    }
    else
    {
        switch(cantidadLampara)
        {
            case 5 :
            if (marca == "ArgentinaLuz") 
            {
                descuento = 0.6; //40% de descuento
            }
            else
            {
                descuento = 0.7; //30% de descuento
            }
            break;

            case 4 :
            if (marca == "ArgentinaLuz")
            {
                descuento = 0.75; // 25% de descuento
            }
            else if(marca == "FelipeLaparas")
            {
                descuento = 0.75; // 25% de descuento
            }
            else
            {
                descuento = 0.8; //20% de descuento
            }
            break;

            case 3 :
            if (marca == "ArgentinaLuz")
            {
                descuento = 0.85; //15% de descuento
            }
            else if (marca == "FelipeLaparas")
            {
                descuento = 0.9; //10% de descuento 
            }
            else
            {
                descuento = 0.95; //5% de descuento
            }

        }
        //fin de switch

    }
    //fin de la aplicacion de descuentos

    precio = cantidadLampara * precioBase * descuento;

    if (precio > 120)
    {
        precioImpuesto = precio * 0.1; //impuesto de IIBB
        mensaje = "Ustedes pago $"+precioImpuesto+" de IIBB";
        alert(mensaje)
    }
    //Suma de IIBB
   
   precio = precio + precioImpuesto;
   //precio final

   precio = "$"+precio;
   document.getElementById("txtIdprecioDescuento").value = precio;
   //muestra del mensaje 
   
}
