var getBrowserWidth = window.innerWidth;

function changeStyle() {
    var header = document.getElementById('header');
    var vnnLogo = document.getElementById('vnnlogo');
    var title = document.getElementById('title');
    var navMenu = document.getElementById('menu');
    var siteWrapper = document.getElementById('sitewrapper');
    var ACFCDescription = document.getElementById('peopledescriptionACFC');
    var jotaDescription = document.getElementById('peopledescriptionJOTA');
    var twoEggsDescription = document.getElementById('peopledescription2EGGS');
    var toddDescription = document.getElementById('peopledescriptionTODD');
    var thePeopleSign = document.getElementById('thepeople');
    var peopleContainer = document.getElementById('peoplecontainer');
    
    if (getBrowserWidth <= 1024) {
        header.style.height = "85px";
        vnnLogo.style.height = "85px";
        title.style.fontSize = "20px";
        navMenu.style.fontSize = "19px";
        siteWrapper.style.width = "795px";
        siteWrapper.style.height = "350px";
        thePeopleSign.style.fontSize = "25px";
        peopleContainer.style.height = "60%";
        ACFCDescription.style.fontSize = "16px";
        ACFCDescription.style.paddingTop = "85px";
        jotaDescription.style.fontSize = "16px";
        jotaDescription.style.paddingTop = "105px";
        twoEggsDescription.style.fontSize = "16px";
        twoEggsDescription.style.paddingTop = "100px";
        toddDescription.style.fontSize = "16px";
        toddDescription.style.paddingTop = "108px";
    }
    if (getBrowserWidth >= 1920) {
        header.style.height = "170px";
        vnnLogo.style.height = "170px";
        title.style.fontSize = "42px";
        navMenu.style.fontSize = "45px";
        siteWrapper.style.width = "1800px";
        siteWrapper.style.height = "541px";
        thePeopleSign.style.fontSize = "60px";
        peopleContainer.style.height = "81%";
        ACFCDescription.style.fontSize = "35px";
        ACFCDescription.style.paddingTop = "228px";
        jotaDescription.style.fontSize = "35px";
        jotaDescription.style.paddingTop = "275px";
        twoEggsDescription.style.fontSize = "35px";
        twoEggsDescription.style.paddingTop = "275px";
        toddDescription.style.fontSize = "35px";
        toddDescription.style.paddingTop = "275px";
    }
    if (getBrowserWidth >= 3840) {
        header.style.height = "350px";
        vnnLogo.style.height = "350px";
        title.style.fontSize = "90px";
        navMenu.style.fontSize = "100px";
        siteWrapper.style.width = "3700px";
        siteWrapper.style.height = "1000px";
        thePeopleSign.style.fontSize = "125px";
        peopleContainer.style.height = "92%";
        ACFCDescription.style.fontSize = "75px";
        jotaDescription.style.fontSize = "75px";
        twoEggsDescription.style.fontSize = "75px";
        toddDescription.style.fontSize = "75px";
        ACFCDescription.style.paddingTop = "500px";
        jotaDescription.style.paddingTop = "595px";
        twoEggsDescription.style.paddingTop = "590px";
        toddDescription.style.paddingTop = "595px";
    }
    
    console.log("Your browser width is " + getBrowserWidth);
}
window.onload = changeStyle;
