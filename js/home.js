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

  //canvas animation
  var canvas, stage, exportRoot;
  function init() {

    canvas = document.getElementById("canvas");
    exportRoot = new lib.sidebar_animation_v1();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
  }

  //draw the canvas
  $('document').ready(function() {
    init();
  });




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
    receiver = count('receiver', receiver);
  }, 1500);


})(jQuery);
