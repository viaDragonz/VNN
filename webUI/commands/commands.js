//Why am I doing all of this? Because I want.
var getBrowserWidth = window.innerWidth;

function changeStyle() {
    var header = document.getElementById('header');
    var vnnLogo = document.getElementById('vnnlogo');
    var title = document.getElementById('title');
    var navMenu = document.getElementById('menu');
    var commandsTitle = document.getElementById('commandstitle');
    var commandsBoxPadding = document.getElementById('ulcommands');
    var tylerText = document.getElementById('tylertext');
    var tyler = document.getElementById('tyler');
    
    if (getBrowserWidth <= 1024) {
        header.style.height = "85px";
        vnnLogo.style.height = "85px";
        title.style.fontSize = "20px";
        navMenu.style.fontSize = "19px";
        commandsBoxPadding.style.paddingLeft = "45px";
        commandsBoxPadding.style.paddingRight = "45px";
        commandsBoxPadding.style.fontSize = "20px";
        tylerText.style.fontSize = "38px";
        tyler.style.height = "91px";
    }
    if (getBrowserWidth >= 1920) {
        header.style.height = "170px";
        vnnLogo.style.height = "170px";
        title.style.fontSize = "42px";
        navMenu.style.fontSize = "45px";
        commandsTitle.style.width = "390px";
        commandsTitle.style.fontSize = "31px";
        commandsBoxPadding.style.paddingLeft = "65px";
        commandsBoxPadding.style.paddingRight = "65px";
        commandsBoxPadding.style.fontSize = "35px";
        tylerText.style.fontSize = "80px";
        tyler.style.height = "182px";
    }
    if (getBrowserWidth >= 3840) {
        header.style.height = "350px";
        vnnLogo.style.height = "350px";
        title.style.fontSize = "90px";
        navMenu.style.fontSize = "100px";
        commandsBoxPadding.style.paddingLeft = "150px";
        commandsBoxPadding.style.paddingRight = "150px";
        commandsBoxPadding.style.fontSize = "70px";
        tylerText.style.fontSize = "150px";
        tyler.style.height = "342px";
    }
}
window.onload = changeStyle;
