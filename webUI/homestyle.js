var getBrowserWidth = window.innerWidth;

function changeStyle() {
    var header = document.getElementById('header');
    var vnnLogo = document.getElementById('vnnlogo');
    var title = document.getElementById('title');
    var navMenu = document.getElementById('menu');
    
    if (getBrowserWidth <= 1024) {
        header.style.height = "85px";
        vnnLogo.style.height = "85px";
        title.style.fontSize = "20px";
        navMenu.style.fontSize = "19px";
    }
    if (getBrowserWidth >= 1920) {
        header.style.height = "170px";
        vnnLogo.style.height = "170px";
        title.style.fontSize = "42px";
        navMenu.style.fontSize = "45px";
    }
    if (getBrowserWidth >= 3840) {
        header.style.height = "350px";
        vnnLogo.style.height = "350px";
        title.style.fontSize = "90px";
        navMenu.style.fontSize = "100px";
    }
}
window.onload = changeStyle;
