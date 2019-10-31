var botStatus = new XMLHttpRequest();
botStatus.onreadystatechange = function () {
    //if (this.readyState == 4 && this.status == 200) {
    //   document.getElementById('botstatus').innerHTML = botStatus.responseText;
    //}
    if (botStatus.responseText === '[{ "status":"online","color":"green" }]') {
        document.getElementById('botstatus').innerHTML = "ONLINE";
        document.getElementById('botstatus').style.color = "green";
        document.getElementById('engineer').style.backgroundImage = "url('../images/engineer_on.png')";
    }
    if (botStatus.responseText === '[{ "status":"offline","color":"red" }]') {
        document.getElementById('botstatus').style.color = "red";
        document.getElementById('engineer').style.backgroundImage = "url('../images/engineer_off.png')";
        document.getElementById('engineer').style.backgroundSize = "275px";
        document.getElementById('botstatus').innerHTML = "OFFLINE";
    }
};
botStatus.open("GET", "https://api-vnn.ratelimited.me/status", true);
botStatus.send();
