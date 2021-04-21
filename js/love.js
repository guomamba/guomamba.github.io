$(document).ready(function(){
    var main = $("#main");
    var heart = $("#heart");
    var small_heart = $("#small_heart");
    var finger = $("#finger");
    var mini_heart = $("#mini_heart")
    var myQueue = [
        function(){
            heart.animate({top: '635px',height: '0px',width: '0px'},100);
            heart.animate({top: '0px',height: '635px',width: '988px'},1000,next);
        },
        function(){
            $("#cartoon").animate({marginTop: '235px',height: '400px',width: '600px'},1000,next)
        },
        function(){
            heart.animate({top: '20px',height:'-=20px',width:'-=30px'},100);
            heart.animate({top: '0px',height:'+=20px',width:'+=30px'},200,next);
        }
        ,function(){
            heart.animate({top: '20px',height:'-=20px',width:'-=30px'},100);
            heart.animate({top: '0px',height:'+=20px',width:'+=30px'},200,next);
        },
        function(){
            heart.animate({top: '20px',height:'-=20px',width:'-=30px'},100);
            heart.animate({top: '0px',height:'+=20px',width:'+=30px'},200); 
            small_heart.fadeTo(200,1,next)
        },
        function(){
            heart.animate({top: '20px',height:'-=20px',width:'-=30px'},100);
            heart.animate({top: '0px',height:'+=20px',width:'+=30px'},200,next); 
        },
        function(){
            small_heart.rotate({angle: 0,animateTo: 15,duration: 100,callback: next})
        },
        function(){
            small_heart.rotate({angle: 15,animateTo: 0,duration: 100,callback: next})
        },
        function(){
            small_heart.rotate({angle: 0,animateTo: -15,duration: 100,callback: next})
        },
        function(){
            small_heart.rotate({angle: -15,animateTo: 0,duration: 100,callback: next})
        },
        function(){
            main.fadeOut(1000,next);
        },
        function(){
            $('#background1').remove();
            main.css("background-color","#FEE4E2")
            $('#background2').css("display","block")
            main.fadeIn(1000,next);
        },
        function(){
            finger.animate({height: '160px',width: '200px'},1000,next)
        },
        function(){
            finger.rotate({center:["0","100%"],animateTo: -15,duration: 200,callback: next})
        },
        function(){
            finger.rotate({center:["0","100%"],animateTo: 0,duration: 100,callback: next})
        },
        function(){
            mini_heart.fadeTo(100,0.5)
            mini_heart.animate({marginLeft: '400px',marginTop: '60px',height: '53px',width: '60px',opacity: '1'},1000,next)
        },
        function(){
            mini_heart.fadeTo(100,0)
            mini_heart.animate({marginLeft: '200px',marginTop: '80px',height: '18px',width: '20px'})
            $(".frame").fadeTo(500,1,next)
        },
        function(){
            finger.rotate({center:["0","100%"],animateTo: -15,duration: 200,callback: next})
        },
        function(){
            finger.rotate({center:["0","100%"],animateTo: 0,duration: 100,callback: next})
        },
        function(){
            mini_heart.fadeTo(100,0.5)
            mini_heart.animate({marginLeft: '400px',marginTop: '60px',height: '53px',width: '60px',opacity: '1'},1000)
            $(".frame").fadeTo(500,0,next)
        },
        function(){
            mini_heart.fadeTo(100,0,next)
            mini_heart.animate({marginLeft: '200px',marginTop: '80px',height: '18px',width: '20px'})
        },
        function(){
            $('#photo_0').attr("src","../images/Haruko_Akagi.jpg")
            $(".frame").fadeTo(500,1,next)
        },
        function(){
            $('#background3').animate({marginBottom: '0px',height: '100%',width: '100%'},1000,next)
            $('#background2').remove();
        },
        function(){
            $('#background4').animate({marginLeft: '0px',height: '100%',width: '100%'},1000,next)
            $('#background3').remove();
        },
        function(){
            $(".showLove").fadeTo(1000,1,next)
        },
        function(){
            $(".myheart").fadeTo(500,0.8,next)
        },
        function(){
            $(".myheart").animate({marginLeft: '-=30px',marginTop: '-=30px',height: '+=50px',width: '+=60px'})
            $(".together").fadeTo(1000,1,next)
        },
        function(){
            $(".title").fadeTo(1000,1)
            $(".myheart").animate({marginLeft: '+=30px',marginTop: '+=30px',height: '-=50px',width: '-=60px'},200,next)
        },
        function(){
            $(".myheart").animate({marginLeft: '-=30px',marginTop: '-=30px',height: '+=50px',width: '+=60px'})
        }
    ]
    function next(){
        main.dequeue('myqueue')
    }
    main.queue('myqueue', myQueue);
    next()
}) 