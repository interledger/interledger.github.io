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
  var sender = 525.380;
  var receiver = 23.120;

  function count(){

    sender -= .0111;
    receiver += .01;

    var senderNumber = sender.toFixed(3);
    var receiverNumber = receiver.toFixed(3);

    var senderInitial = senderNumber.slice(0, -1);
    var senderLastChar = '<span class="superscript">'+senderNumber.slice(-1)+'</span>';

    var receiverInitial = receiverNumber.slice(0, -1);
    var receiverLastChar = '<span class="superscript">'+receiverNumber.slice(-1)+'</span>';

    $(".cents1").html(senderInitial + senderLastChar);
    $(".cents2").html(receiverInitial + receiverLastChar);


  }

  //fire every 1.5s
  setInterval(count, 1500);


})(jQuery)
