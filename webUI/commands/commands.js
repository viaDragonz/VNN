//Why am I doing all of this? Because I want.
var getMonitorWidth = window.screen.width;
//var getBrowserWidth = window.innerWidth;

function changeStyle() {
    var header = document.getElementById('header');
    var vnnLogo = document.getElementById('vnnlogo');
    var title = document.getElementById('title');
    var navMenu = document.getElementById('menu');
    var commandsTitle = document.getElementById('commandstitle');
    var commandsBoxPadding = document.getElementById('ulcommands');
    var tylerText = document.getElementById('tylertext');
    var tyler = document.getElementById('tyler');
    if (getMonitorWidth <= 1024) {
        commandsBoxPadding.style.paddingLeft = "45px";
        commandsBoxPadding.style.paddingRight = "45px";
        commandsBoxPadding.style.fontSize = "20px";
        tylerText.style.fontSize = "38px";
        tyler.style.height = "91px";
    }
    if (getMonitorWidth >= 1920) {
        header.style.height = "200px";
        vnnLogo.style.height = "200px";
        title.style.fontSize = "45px";
        navMenu.style.fontSize = "50px";
        commandsTitle.style.width = "390px";
        commandsTitle.style.fontSize = "31px";
        commandsBoxPadding.style.paddingLeft = "65px";
        commandsBoxPadding.style.paddingRight = "65px";
        commandsBoxPadding.style.fontSize = "35px";
        tylerText.style.fontSize = "80px";
        tyler.style.height = "182px";
    }
    if (getMonitorWidth >= 3840) {
        commandsBoxPadding.style.paddingLeft = "150px";
        commandsBoxPadding.style.paddingRight = "150px";
        commandsBoxPadding.style.fontSize = "70px";
        tylerText.style.fontSize = "150px";
        tyler.style.height = "342px";
    }
}
window.onload = changeStyle;
