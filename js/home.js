(function($){

  //typewriter
  $(function(){
    $(".typewriter").typed({
      stringsElement: $('#typed-strings'),
      typeSpeed: 50,
      loop: true,
      backDelay: 1000,
      backSpeed: 10,
    });
  });

  //on-off switch
  $(function() {
    $(".onoffswitch-label").click(function() {
      $('body').toggleClass('dark');
    });
  });

  //syntax highlighting
  hljs.initHighlightingOnLoad();

  //number counting
  function count(type, number){

    number = type === 'sender' ? number - .0111 : number + .01;

    number = number.toFixed(3);

    var initial = number.slice(0, -1);
    var last = '<span class="superscript">'+number.slice(-1)+'</span>';

    $('.'+type).html(initial + last);

    return parseFloat(number);
  }

  var sender = 525.380;
  var receiver = 23.120;


  setInterval(function(){
    sender = count('sender', sender);
  }, 1500);


  setTimeout(function(){
    setInterval(function(){
      receiver = count('receiver', receiver);
    }, 1500);
  }, 1000);


 //svg animation
 $(function(){

    var container = $("#Graphic");
    var path1 = $("#path-1");
    var path2 = $("#path-2");
    var path3 = $("#path-3");
    var path4 = $("#path-4");
    var dot1 = $("#dot-1");
    var dot2 = $("#dot-2");
    var dot3 = $("#dot-3");
    var dot4 = $("#dot-4");
    var dot5 = $("#dot-5");
    var circle1 = $("#circle-1");
    var circle2 = $("#circle-2");
    var circle3 = $("#circle-3");
    var circle4 = $("#circle-4");
    var circle5 = $("#circle-5");

    var tl = new TimelineLite({onComplete:function() {
      this.restart()}
    });

    TweenLite.set([dot1, dot2, dot3, dot4, dot5], {opacity:0});
    TweenLite.set([path1, path2, path3, path4], {drawSVG:"0px"});

    tl.delay(1.5)
      .to(path1, 0.3, {drawSVG:"20%", ease: Power0.easeNone})
      .to(path1, 0.7, {drawSVG:"100% 120%", ease: Power0.easeNone})
      .set({}, {}, "+=.5")
      .to(path2, 0.3, {drawSVG:"20%", ease: Power0.easeNone})
      .to(path2, 0.7, {drawSVG:"100% 120%", ease: Power0.easeNone})
      .set({}, {}, "+=.5")
      .to(path3, 0.3, {drawSVG:"20%", ease: Power0.easeNone})
      .to(path3, 0.7, {drawSVG:"100% 120%", ease: Power0.easeNone})
      .set({}, {}, "+=.5")
      .to(path4, 0.3, {drawSVG:"20%", ease: Power0.easeNone})
      .to(path4, 0.8, {drawSVG:"100% 120%", ease: Power0.easeNone})
      .set({}, {}, "+=.4");

    var anim1 = new TimelineLite({onComplete:function() {
      this.restart()}
    });

    anim1.delay(1.5)
       .set(dot1, {opacity:1},0)
       .set(dot1, {opacity:0}, 0.3)
       .set(dot2, {opacity:1},0.3)
       .set(dot2, {opacity:0}, 0.5)
       .set(dot3, {opacity:1},0.4)
       .set(dot3, {opacity:0}, 0.6)
       .set(dot5, {opacity:1},0.6)
       .set(dot5, {opacity:0}, 0.8)
       .to(circle1, 0, {scale:1.05},0)
       .to(circle1, 1, {scale:1, ease: Elastic.easeOut.config(1, 0.3), y: 0 },0)
       .to(circle2, 0, {scale:1.05}, 0.3)
       .to(circle2, 1, {scale:1, ease: Elastic.easeOut.config(1, 0.3), y: 0 }, 0.3)
       .to(circle3, 0, {scale:1.05}, 0.4)
       .to(circle3, 1, {scale:1, ease: Elastic.easeOut.config(1, 0.3), y: 0 }, 0.4)
       .to(circle5, 0, {scale:1.05}, 0.8)
       .to(circle5, 1, {scale:1, ease: Elastic.easeOut.config(1, 0.3), y: 0 }, 0.8)
       .set({}, {}, "+=4.2");

    var anim2 = new TimelineLite({onComplete:function() {
      this.restart()}
    });

    anim2
       .delay(3)
       .set(dot1, {opacity:1},0)
       .set(dot1, {opacity:0}, 0.3)
       .set(dot2, {opacity:1},0.3)
       .set(dot2, {opacity:0}, 0.5)
       .set(dot4, {opacity:1},0.4)
       .set(dot4, {opacity:0}, 0.6)
       .set(dot5, {opacity:1},0.6)
       .set(dot5, {opacity:0}, 0.8)
       .to(circle1, 0, {scale:1.05},0)
       .to(circle1, 1, {scale:1, ease: Elastic.easeOut.config(1, 0.3), y: 0 },0)
       .to(circle2, 0, {scale:1.05}, 0.3)
       .to(circle2, 1, {scale:1, ease: Elastic.easeOut.config(1, 0.3), y: 0 }, 0.3)
       .to(circle4, 0, {scale:1.05}, 0.4)
       .to(circle4, 1, {scale:1, ease: Elastic.easeOut.config(2, 0.3), y: 0 }, 0.4)
       .to(circle5, 0, {scale:1.05}, 0.8)
       .to(circle5, 1, {scale:1, ease: Elastic.easeOut.config(1, 0.3), y: 0 }, 0.8)
       .set({}, {}, "+=4.2");

    var anim3 = new TimelineLite({onComplete:function() {
      this.restart()}
    });

    anim3
       .delay(4.5)
       .set(dot1, {opacity:1},0)
       .set(dot1, {opacity:0}, 0.3)
       .set(dot4, {opacity:1},0.5)
       .set(dot4, {opacity:0}, 0.6)
       .set(dot5, {opacity:1},0.6)
       .set(dot5, {opacity:0}, 0.8)
       .to(circle1, 0, {scale:1.05},0)
       .to(circle1, 1, {scale:1, ease: Elastic.easeOut.config(1, 0.3), y: 0 },0)
       .to(circle4, 0, {scale:1.05}, 0.5)
       .to(circle4, 1, {scale:1, ease: Elastic.easeOut.config(2, 0.3), y: 0 }, 0.5)
       .to(circle5, 0, {scale:1.05}, 0.8)
       .to(circle5, 1, {scale:1, ease: Elastic.easeOut.config(1, 0.3), y: 0 }, 0.8)
       .set({}, {}, "+=4.2");

    var anim4 = new TimelineLite({onComplete:function() {
      this.restart()}
    });

    anim4
       .delay(6)
       .set(dot1, {opacity:1},0)
       .set(dot1, {opacity:0}, 0.3)
       .set(dot2, {opacity:1},0.3)
       .set(dot2, {opacity:0}, 0.5)
       .set(dot3, {opacity:1},0.4)
       .set(dot3, {opacity:0}, 0.6)
       .set(dot4, {opacity:1},0.5)
       .set(dot4, {opacity:0}, 0.7)
       .set(dot5, {opacity:1},0.6)
       .set(dot5, {opacity:0}, 0.8)
       .to(circle1, 0, {scale:1.05},0)
       .to(circle1, 1, {scale:1, ease: Elastic.easeOut.config(1, 0.3), y: 0 },0)
       .to(circle2, 0, {scale:1.05}, 0.3)
       .to(circle2, 1, {scale:1, ease: Elastic.easeOut.config(1, 0.3), y: 0 }, 0.3)
       .to(circle3, 0, {scale:1.05}, 0.4)
       .to(circle3, 1, {scale:1, ease: Elastic.easeOut.config(1, 0.3), y: 0 }, 0.4)
       .to(circle4, 0, {scale:1.05}, 0.5)
       .to(circle4, 1, {scale:1, ease: Elastic.easeOut.config(2, 0.3), y: 0 }, 0.5)
       .to(circle5, 0, {scale:1.05}, 0.8)
       .to(circle5, 1, {scale:1, ease: Elastic.easeOut.config(1, 0.3), y: 0 }, 0.8)
       .set({}, {}, "+=4.2");
  });


})(jQuery);
