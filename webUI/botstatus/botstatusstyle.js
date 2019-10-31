var getMonitorWidth = window.screen.width;
//var getBrowserWidth = window.innerWidth;

function changeStyle() {
    var header = document.getElementById('header');
    var vnnLogo = document.getElementById('vnnlogo');
    var title = document.getElementById('title');
    var navMenu = document.getElementById('menu');
    var siteWrapper = document.getElementById('site-wrapper');
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
        siteWrapper.style.width = "890px";
        siteWrapper.style.height = "450px";
        engineer.style.backgroundSize = "310px";
        engineer.style.height = "425px";
        engineer.style.backgroundPosition = "80px 10px";
        botStatusBox.style.top = "-280px";
        botStatusBox.style.left = "345px";
        botStatusBox.style.width = "575px";
        botStatusBox.style.height = "125px";
        botStatusBoxMainText.style.top = "0px";
        botStatusBoxMainText.style.fontSize = "47px";
        botStatus.style.top = "-225px";
        botStatus.style.fontSize = "47px";
    }
    if (getMonitorWidth >= 1920) {
        header.style.height = "170px";
        vnnLogo.style.height = "170px";
        title.style.fontSize = "42px";
        navMenu.style.fontSize = "45px";
        siteWrapper.style.width = "1820px";
        siteWrapper.style.height = "1000px";
        engineer.style.backgroundSize = "610px";
        engineer.style.height = "815px";
        engineer.style.backgroundPosition = "100px";
        botStatusBox.style.top = "-470px";
        botStatusBox.style.left = "715px";
        botStatusBox.style.width = "1325px";
        botStatusBox.style.height = "250px";
        botStatusBoxMainText.style.top = "-5px";
        botStatusBoxMainText.style.fontSize = "100px";
        botStatus.style.top = "-245px";
        botStatus.style.fontSize = "100px";
    }
    if (getMonitorWidth >= 3840) {
        header.style.height = "350px";
        vnnLogo.style.height = "350px";
        title.style.fontSize = "90px";
        navMenu.style.fontSize = "100px";
        siteWrapper.style.width = "3700px";
        siteWrapper.style.height = "2000px";
        engineer.style.height = "1900px";
        engineer.style.backgroundSize = "1350px";
        engineer.style.backgroundPosition = "421px"; // not 420
        botStatusBox.style.top = "-1180px";
        botStatusBox.style.left = "1355px";
        botStatusBox.style.width = "2075px";
        botStatusBox.style.height = "500px";
        botStatusBoxMainText.style.top = "10px";
        botStatusBoxMainText.style.fontSize = "175px";
        botStatus.style.top = "-250px";
        botStatus.style.fontSize = "200px";
    }
        console.log("Your monitor width is: " + getMonitorWidth);
}
window.onload = changeStyle;
