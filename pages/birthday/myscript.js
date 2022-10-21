// document.addEventListener('')

var myPix = new Array("source/1.png","source/2.png","source/3.png","source/4.png","source/5.png","source/6.png","source/7.png","source/8.png");

let i = 1
    while (i <= 16) {
        // console.log(i)
        var id = "op" + i
        console.log(id)
        var item = document.getElementById(id)
        console.log(item)
        var left = Math.floor(Math.random()* 800)
        var Top = Math.floor(Math.random()* 850)
        // var angle  = Math.floor(Math.random()* 30)
        var angle = Math.random() * 61 -30
        console.log(angle)
        var number = Math.floor(Math.random()* 8)
        item.style.left = left + "px";
        item.style.top = Top + "px";
        item.style["-webkit-transform"] = "rotate("+ angle +"deg)"
        item.src = myPix[number]
        i++
    }

document.addEventListener('DOMContentLoaded', function () {
    function audioAutoPlay() {
        var audio = document.getElementById('audio');
            audio.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
    }
    audioAutoPlay();
});
//--创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
document.addEventListener('touchstart', function () {
    function audioAutoPlay() {
        var audio = document.getElementById('audio');
            audio.play();
    }
    audioAutoPlay();
});
