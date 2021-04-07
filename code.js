//PRIMER INTENTO

/*function counter() {
    var dias = document.getElementsByClassName("dias")

    var begin = new Date("04/04/2021")
    var now = new Date().get
    
    let milisegundosDia = 24 * 60 * 60 * 1000

    let militranscurridos = Math.abs(begin.getTime() - ahora.getTime())

    let diastranscurridos = Math.round(militranscurridos/milisegundosDia)

    dias.innerHTML = diastranscurridos
}

var interval = setInterval(counter, 1000)
*/

//SEGUNDO INTENTO

var start = new Date("April 4, 2021 22:36:00");
var one_hour = 1000 * 60 * 60;
var one_day = 1000 * 60 * 60 * 24;

function updateHour() {
    var horas = document.getElementsByClassName("horas")
    var minutos = document.getElementsByClassName("minutos")
    var segundos = document.getElementsByClassName("segundos")

    var currentdate = new Date(); 
    var horas_desde = ((currentdate - start)/one_hour).toFixed(4);
    var delta = Math.abs(currentdate - start) / 1000;

    var hours = Math.floor(delta / 3600);
    delta -= hours * 3600;

    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    var seconds = delta % 60;
    
    
    horas.innerHTML = hours
    minutos.innerHTML = minutes
    segundos.innerHTML = seconds

    /*$("span.horas").text(hours);
    $("span.minutos").text(minutes);
    $("span.segundos").text(Math.floor(seconds));*/
}

setInterval(updateHour, 1000);


//INTENTO CON JQUERY

/*var start = new Date("April 4, 2021 22:36:00");
var one_hour = 1000 * 60 * 60;
var one_day = 1000 * 60 * 60 * 24;

$(document).ready(function updateHour() {
    var horas = document.getElementsByClassName("horas")
    var minutos = document.getElementsByClassName("minutos")
    var segundos = document.getElementsByClassName("segundos")

    var currentdate = new Date(); 
    var horas_desde = ((currentdate - start)/one_hour).toFixed(4);
    var delta = Math.abs(currentdate - start) / 1000;

    var hours = Math.floor(delta / 3600);
    delta -= hours * 3600;

    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    var seconds = delta % 60;
    
    $("#hor").text(hours);
    //horas.innerHTML = hours
    $("#min").text(minutes);
    //minutos.innerHTML = minutes
    $("#seg").text(seconds);
    //segundos.innerHTML = seconds
    console.log("La hora es: "+hours);
    /*$("span.horas").text(hours);
    $("span.minutos").text(minutes);
    $("span.segundos").text(Math.floor(seconds));
})

setInterval(updateHour, 1000);*/