var botStatus = new XMLHttpRequest();
botStatus.onreadystatechange = function () {
    //if (this.readyState == 4 && this.status == 200) {
    //   document.getElementById('botstatus').innerHTML = botStatus.responseText;
    //}
    if (botStatus.responseText === `[{ "status":"online","color":"green" }]`) {
        document.getElementById('botstatus').innerHTML = "ONLINE";
    }
    if (botStatus.responseText === `[{ "status":"offline","color":"red" }]`) {
        document.getElementById('botstatus').innerHTML = "OFFLINE";
    } else {
        document.getElementById('botstatus').innerHTML = "OFFLINE";
    }
};
botStatus.open("GET", "https://api-vnn.ratelimited.me/status", true);
botStatus.send();