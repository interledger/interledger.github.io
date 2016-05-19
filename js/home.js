(function($){

  //typewriter
  $(function(){
    $(".typewriter").typed({
      stringsElement: $('#typed-strings'),
      typeSpeed: 50,
      loop: true,
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
    exportRoot = new lib.AnimateCC_Test();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
  }

  //initialize canvas on load
  $('body').load(function() {
    init();
  });


})(jQuery)
