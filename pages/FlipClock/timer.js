document.addEventListener('DOMContentLoaded',function(){
    var item = document.getElementById("background")
    item.style.height = window.screen.availHeight - 100 + "px"
})

var showtime = function (type) {
    var nowdate = new Date();
    switch (type) {
        case "hour":
            return checkTime(nowdate.getHours());
        case "minute":
            return checkTime(nowdate.getMinutes());
        case "second":
            return checkTime(nowdate.getSeconds());
        default:
            break;
    }
}

var checkTime = function (i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var hour = document.getElementById("showhour");
hour.style.fontSize = 1.5*window.screen.availHeight/2 + "px"
var minute = document.getElementById("showminute");
minute.style.fontSize = 1.5*window.screen.availHeight/2 + "px"
var second = document.getElementById("showsecond");
setInterval (function() {
    var h = "hour"
    hour.textContent = showtime(h);
    var m = "minute"
    minute.textContent = showtime(m);
    var s = "second"
    second.textContent = showtime(s);
}, 1000);  