$(document).ready(function(){
    var heart = $("#heart");
    var cartoon = $("#cartoon");
    heart.animate({top: '635px',height: '0px',width: '0px'},100);
    heart.animate({top: '0px',height: '635px',width: '988px'},1000);
    setTimeout(() => {
        cartoon.animate({marginTop: '235px',height: '400px',width: '600px'},1000)
        setTimeout(() => {
            heart.animate({top: '20px',height:'-=20px',width:'-=30px'},100);
            heart.animate({top: '0px',height:'+=20px',width:'+=30px'},200);
            setTimeout(() => {
                heart.animate({top: '20px',height:'-=20px',width:'-=30px'},100);
                heart.animate({top: '0px',height:'+=20px',width:'+=30px'},200); 
            }, 500);   
        }, 1000);
    }, 1000);
}) 