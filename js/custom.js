(function($){

  //Add active class to sidebar links
  function sidebarActiveClass() {
    var curentFile = window.location.pathname.split("/").pop();
    $('.nav-sidebar > li > a[href="' + curentFile + '"]').parent().addClass('active');
  }

  sidebarActiveClass();

  //google analytics event tracking for all links
  $('a').on('click', function() {
    var linkText = $(this).text();
    ga( 'send', 'event', 'Link', 'Click', linkText);
  });


})(jQuery)
