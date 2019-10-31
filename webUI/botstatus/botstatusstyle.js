var getMonitorWidth = window.screen.width;
//var getBrowserWidth = window.innerWidth;

function changeStyle() {
    var header = document.getElementById('header');
    var vnnLogo = document.getElementById('vnnlogo');
    var title = document.getElementById('title');
    var navMenu = document.getElementById('menu');
    var engineer = document.getElementById('engineer');
    var botStatusBox = document.getElementById('botstatus-box');
    var botStatusBoxMainText = document.getElementById('botstatus-box-maintext');
    //is it Offline, Online or In Maintenance?
    var botStatus = document.getElementById('botstatus');
    //is it Offline, Online or In Maintenance?
    
    if (getMonitorWidth <= 1024) {
        header.style.height = "85px";
        vnnLogo.style.height = "85px";
        title.style.fontSize = "20px";
        navMenu.style.fontSize = "19px";
        engineer.style.backgroundPosition = "70px";
        botStatusBox.style.top = "82%";
        botStatusBox.style.height = "31%";
        botStatusBoxMainText.style.top = "-20px";
        botStatusBoxMainText.style.fontSize = "37px";
        botStatus.style.top = "-182px";
        botStatus.style.fontSize = "35px";
    }
    if (getMonitorWidth >= 1920) {
        header.style.height = "170px";
        vnnLogo.style.height = "170px";
        title.style.fontSize = "42px";
        navMenu.style.fontSize = "45px";
        engineer.style.backgroundPosition = "305px";
        botStatusBox.style.top = "68%";
        botStatusBox.style.height = "25%";
        botStatusBoxMainText.style.top = "-55px";
        botStatusBoxMainText.style.fontSize = "75px";
        botStatus.style.top = "-270px";
        botStatus.style.fontSize = "70px";
    }
    if (getMonitorWidth >= 3840) {
        header.style.height = "350px";
        vnnLogo.style.height = "350px";
        title.style.fontSize = "90px";
        navMenu.style.fontSize = "100px";
        engineer.style.backgroundPosition = "525px";
        botStatusBox.style.top = "68%";
        botStatusBox.style.height = "25%";
        botStatusBoxMainText.style.top = "-155px";
        botStatusBoxMainText.style.fontSize = "175px";
        botStatus.style.top = "-565px";
        botStatus.style.fontSize = "150px";
    }
        console.log("Your monitor width is: " + getMonitorWidth);
}
window.onload = changeStyle;
