
var clock = document.getElementById('clock');

function hexClock (){
    var time = new Date();
    var hours = time.getHours().toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

    if(hours.length < 2){
        hours = '0' +hours;
    }

    if(minutes.length < 2){
        minutes = '0' + minutes;
    }

    if(seconds.length < 2){
        seconds = '0' + seconds;
    }

    var clockStr = hours + ':' + minutes + ':' +seconds;
   

    clock.textContent = clockStr;
    
}

hexClock();
setInterval(hexClock, 1000);

var uurtje = new Date();
var maan = uurtje.getHours();
var zonnetje = document.getElementById("zonie");
var maantje = document.getElementById("manie");

if(maan >= 7 && maan < 19){
    maantje.classList.remove("blocked");
    zonnetje.classList.remove("none");

    zonnetje.classList.add("blocked");
    maantje.classList.add("none");
}else{
    maantje.classList.remove("none");
    zonnetje.classList.remove("blocked");

    maantje.classList.add("blocked");
    zonnetje.classList.add("none");
}

var datumVanNu = new Date();
var datumCijfers = datumVanNu.getDate();
var dayName = datumVanNu.getDay();
var yearName = datumVanNu.getFullYear();
var datum = document.getElementById('datum');
datum.innerHTML = datumCijfers + '-' + dayName + '-' + yearName;

