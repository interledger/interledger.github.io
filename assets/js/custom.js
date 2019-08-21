(function($){

  // Mobile menu.  
  $('[data-toggle="collapse"]').on('click', function() {
    $navMenuCont = $($(this).data('target'));
    $navMenuCont.toggleClass('show');
    // $(".menu-overlay").toggleClass('active');
  });
  $(".menu-overlay").click(function(event) {
    $(".navbar-toggler").trigger("click");
  });

  //Close menu if open on scroll
  $prevScrollpos = window.pageYOffset;
  $(window).scroll(function() {

    $currentScrollPos = window.pageYOffset;
    if ($prevScrollpos < $currentScrollPos) {
      if ( $("#navbarHolder").hasClass("show") )  {
        $(".navbar-toggler").trigger("click");
      };
    }
    $prevScrollpos = $currentScrollPos;
  })


  //Add active class to sidebar links
  function sidebarActiveClass() {
    var curentFile = window.location.pathname
    $('.sidebar_pagelist > li > a[href="' + curentFile + '"]').addClass('active');
  }

  sidebarActiveClass();

  //google analytics event tracking for all links
  $('a').on('click', function() {
    var linkText = $(this).text();
    ga( 'send', 'event', 'Link', 'Click', linkText);
  });


})(jQuery)
