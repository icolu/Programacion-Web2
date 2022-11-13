function agarrar_precio(url){
    var req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open('GET',url, true);
    function valor() {
        var precio = document.getElementsByClassName("andes-money-amount__fraction")[0].textContent
        var precio_final= '$'+ precio
        return precio_final
    };  
    return req.onload=valor()
}