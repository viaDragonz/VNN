//Why am I doing all of this? Because I want.
var getMonitorWidth = window.screen.width;
//var getMonitorHeight = window.screen.height;
var getBrowserWidth = window.innerWidth;
//var getBrowserHeight = window.innerHeight;

function changeStyle() {
    var commandsBoxPadding = document.getElementById('ulcommands');
    var tylerText = document.getElementById('tylertext');
    var tyler = document.getElementById('tyler');
    //using getBrowserWidth to test the script
    //change to getMonitorWidth before releasing
    if (getBrowserWidth <= 1024) {
        commandsBoxPadding.style.paddingLeft = "45px";
        commandsBoxPadding.style.paddingRight = "45px";
        commandsBoxPadding.style.fontSize = "20px";
        tylerText.style.fontSize = "38px";
        tyler.style.height = "91px";
    }
    if (getBrowserWidth >= 1920) {
        commandsBoxPadding.style.paddingLeft = "65px";
        commandsBoxPadding.style.paddingRight = "65px";
        commandsBoxPadding.style.fontSize = "35px";
        tylerText.style.fontSize = "80px";
        tyler.style.height = "182px";
    }
    if (getBrowserWidth >= 3840) {
        commandsBoxPadding.style.paddingLeft = "150px";
        commandsBoxPadding.style.paddingRight = "150px";
        commandsBoxPadding.style.fontSize = "70px";
        tylerText.style.fontSize = "150px";
        tyler.style.height = "342px";
    }
}
window.onload = changeStyle;
