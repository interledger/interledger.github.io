(function($){

  //google analytics event tracking for all links
  $('a').on('click', function() {
    var linkText = $(this).text();
    ga( 'send', 'event', 'Link', 'Click', linkText);
  });

  //typewriter
  $(function(){
    $(".typewriter").show();
    $(".typewriter").typed({
      strings: ["ledgers.", "<span class='color1'>payment networks.</span>", "<span class='color2'>blockchains.</span>", "<span class='color3'>banks.</span>", "<span class='color4'>digital wallets.</span>", "<span class='color5'>clearing houses.</span>", "<span class='color2'>stock exchanges.</span>", "<span class='color3'>mobile money.</span>"],
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

  setTimeout(function(){
    setInterval(function(){
      sender = count('sender', sender);
    }, 1500);
  }, 200);

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
       .set(dot1, {opacity:1},0.01)
       .set(dot1, {opacity:0}, 0.3)
       .set(dot3, {opacity:1},0.4)
       .set(dot3, {opacity:0}, 0.6)
       .set(dot4, {opacity:1},0.5)
       .set(dot4, {opacity:0}, 0.7)
       .set(dot5, {opacity:1},0.9)
       .set(dot5, {opacity:0}, 1)
       .to(circle1, 0, {scale:1.05},0.01)
       .to(circle1, 1, {scale:1, ease: Elastic.easeOut.config(1, 0.3), y: 0 },0.01)
       .to(circle3, 0, {scale:1.05}, 0.4)
       .to(circle3, 1, {scale:1, ease: Elastic.easeOut.config(1, 0.3), y: 0 }, 0.4)
       .to(circle4, 0, {scale:1.05}, 0.5)
       .to(circle4, 1, {scale:1, ease: Elastic.easeOut.config(2, 0.3), y: 0 }, 0.5)
       .to(circle5, 0, {scale:1.05}, 0.8)
       .to(circle5, 1, {scale:1, ease: Elastic.easeOut.config(1, 0.3), y: 0 }, 0.8)
       .set({}, {}, "+=4.2");

      var anim2 = new TimelineLite({onComplete:function() {
      this.restart()}
    });

    anim2
       .delay(3)
       .set(dot1, {opacity:1},0.01)
       .set(dot1, {opacity:0}, 0.3)
       .set(dot2, {opacity:1},0.3)
       .set(dot2, {opacity:0}, 0.5)
       .set(dot4, {opacity:1},0.4)
       .set(dot4, {opacity:0}, 0.6)
       .set(dot5, {opacity:1},0.8)
       .set(dot5, {opacity:0}, 0.9)
       .set(circle1, {scale:1.05},0.01)
       .to(circle1, 1, {scale:1, ease: Elastic.easeOut.config(1, 0.3), y: 0 },0.01)
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
       .set(dot1, {opacity:1},0.01)
       .set(dot1, {opacity:0}, 0.3)
       .set(dot4, {opacity:1},0.5)
       .set(dot4, {opacity:0}, 0.6)
       .set(dot5, {opacity:1},0.8)
       .set(dot5, {opacity:0}, 0.9)
       .to(circle1, 0, {scale:1.05},0.01)
       .to(circle1, 1, {scale:1, ease: Elastic.easeOut.config(1, 0.3), y: 0 },0.01)
       .to(circle2, 0, {scale:1.05}, 0.5)
       .to(circle2, 1, {scale:1, ease: Elastic.easeOut.config(2, 0.3), y: 0 }, 0.5)
       .to(circle5, 0, {scale:1.05}, 0.8)
       .to(circle5, 1, {scale:1, ease: Elastic.easeOut.config(1, 0.3), y: 0 }, 0.8)
       .set({}, {}, "+=4.2");

    var anim4 = new TimelineLite({onComplete:function() {
      this.restart()}
    });

    anim4
       .delay(6)
       .set(dot1, {opacity:1},0.01)
       .set(dot1, {opacity:0}, 0.3)
       .set(dot2, {opacity:1},0.3)
       .set(dot2, {opacity:0}, 0.5)
       .set(dot3, {opacity:1},0.4)
       .set(dot3, {opacity:0}, 0.6)
       .set(dot4, {opacity:1},0.5)
       .set(dot4, {opacity:0}, 0.7)
       .set(dot5, {opacity:1},0.9)
       .set(dot5, {opacity:0}, 1)
       .to(circle1, 0, {scale:1.05},0.01)
       .to(circle1, 1, {scale:1, ease: Elastic.easeOut.config(1, 0.3), y: 0 },0.01)
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

// typed.js
!function(t){"use strict";var s=function(s,e){this.el=t(s),this.options=t.extend({},t.fn.typed.defaults,e),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=this.isInput?!1:this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};s.prototype={constructor:s,init:function(){var t=this;t.timeout=setTimeout(function(){for(var s=0;s<t.strings.length;++s)t.sequence[s]=s;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){var s=this;if(this.showCursor===!0&&(this.cursor=t('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.stringsElement){s.strings=[],this.stringsElement.hide();var e=this.stringsElement.find("p");t.each(e,function(e,i){s.strings.push(t(i).html())})}this.init()},typewrite:function(t,s){if(this.stop!==!0){var e=Math.round(70*Math.random())+this.typeSpeed,i=this;i.timeout=setTimeout(function(){var e=0,r=t.substr(s);if("^"===r.charAt(0)){var o=1;/^\^\d+/.test(r)&&(r=/\d+/.exec(r)[0],o+=r.length,e=parseInt(r)),t=t.substring(0,s)+t.substring(s+o)}if("html"===i.contentType){var n=t.substr(s).charAt(0);if("<"===n||"&"===n){var a="",h="";for(h="<"===n?">":";";t.substr(s).charAt(0)!==h;)a+=t.substr(s).charAt(0),s++;s++,a+=h}}i.timeout=setTimeout(function(){if(s===t.length){if(i.options.onStringTyped(i.arrayPos),i.arrayPos===i.strings.length-1&&(i.options.callback(),i.curLoop++,i.loop===!1||i.curLoop===i.loopCount))return;i.timeout=setTimeout(function(){i.backspace(t,s)},i.backDelay)}else{0===s&&i.options.preStringTyped(i.arrayPos);var e=t.substr(0,s+1);i.attr?i.el.attr(i.attr,e):i.isInput?i.el.val(e):"html"===i.contentType?i.el.html(e):i.el.text(e),s++,i.typewrite(t,s)}},e)},e)}},backspace:function(t,s){if(this.stop!==!0){var e=Math.round(70*Math.random())+this.backSpeed,i=this;i.timeout=setTimeout(function(){if("html"===i.contentType&&">"===t.substr(s).charAt(0)){for(var e="";"<"!==t.substr(s).charAt(0);)e-=t.substr(s).charAt(0),s--;s--,e+="<"}var r=t.substr(0,s);i.attr?i.el.attr(i.attr,r):i.isInput?i.el.val(r):"html"===i.contentType?i.el.html(r):i.el.text(r),s>i.stopNum?(s--,i.backspace(t,s)):s<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.shuffle&&(i.sequence=i.shuffleArray(i.sequence)),i.init()):i.typewrite(i.strings[i.sequence[i.arrayPos]],s))},e)}},shuffleArray:function(t){var s,e,i=t.length;if(i)for(;--i;)e=Math.floor(Math.random()*(i+1)),s=t[e],t[e]=t[i],t[i]=s;return t},reset:function(){var t=this;clearInterval(t.timeout);var s=this.el.attr("id");this.el.after('<span id="'+s+'"/>'),this.el.remove(),"undefined"!=typeof this.cursor&&this.cursor.remove(),t.options.resetCallback()}},t.fn.typed=function(e){return this.each(function(){var i=t(this),r=i.data("typed"),o="object"==typeof e&&e;r||i.data("typed",r=new s(this,o)),"string"==typeof e&&r[e]()})},t.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery);
