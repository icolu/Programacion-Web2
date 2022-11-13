function agarrar_precio(url){
var req = new XMLHttpRequest();
req.overrideMimeType("application/json");
req.open('GET', url, true);
req.onload  = function() {
    var precio = document.getElementsByClassName("andes-money-amount__fraction")[0].textContent
    console.log('$'+ precio)
    var precio_final= '$'+ precio
    return precio_final
    };
return precio_final
}



