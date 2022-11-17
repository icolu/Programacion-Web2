function agarrar_precio(url){
    var req = new XMLHttpRequest();
    req.overrideMimeType("application/json");
    req.open('GET',url, true);
    req.onload=function valor() {
        var precio = document.getElementsByClassName("andes-money-amount__fraction")[0].textContent
        var precio_final= '$'+ precio
        document.getElementById("prueba2").textContent = precio_final
        return precio_final
        console.log(req.onload=valor())
    };  
} 