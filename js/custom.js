(function($){

  $(function(){

    $('.x').click(function(){
      $('header').fadeOut('fast');
    });


    setTimeout(function(){
      $('header').fadeIn('slow');
      $('header').addClass('animate');
    }, 500);

  });

})(jQuery)
