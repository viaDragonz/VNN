var botStatus = new XMLHttpRequest();
botStatus.onreadystatechange = function () {
    //if (this.readyState == 4 && this.status == 200) {
    //   document.getElementById('botstatus').innerHTML = botStatus.responseText;
    //}
    if (botStatus.responseText === '[{ "status":"online","color":"green" }]') {
        document.getElementById('botstatus').innerHTML = "ONLINE";
        document.getElementById('botstatus').style.color = "green";
        document.getElementById('engineer').style.filter = "contrast(100%)";
    }
    //if (botStatus.responseText === '[{ "status":"offline","color":"red" }]') {
    else {
        document.getElementById('botstatus').innerHTML = "OFFLINE";
        document.getElementById('botstatus').style.color = "red";
        document.getElementById('engineer').style.filter = "contrast(10%)";
    }
};
botStatus.open("GET", "https://api-vnn.ratelimited.me/status", true);
botStatus.send();
