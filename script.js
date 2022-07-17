
var ValorDeTicket= 200;

function resumir(){
 
    // Declaro las variables y guardo su valor ded HTML en ellas
    var cantTickets = document.getElementById('inputCantidad').value ;
    var descuentoCategoria = document.getElementById('inputCategoria').value;
    // Calculo su descuento
    var Total = cantTickets * (ValorDeTicket - ((ValorDeTicket * descuentoCategoria) / 100));

    //Lo que va a Imprimir 
    document.getElementById('Totalcompra').value = "Total a Pagar: $" + Total;
}