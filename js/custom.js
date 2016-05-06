(function($){

  function supportsImports() {
    return 'import' in document.createElement('link');
  }

  if (supportsImports()) { // HTML5 Import Support

    var link = document.querySelector('link[rel="import"]');

    // Clone the <template> in the import.
    var template = link.import.querySelector('template');
    var clone = document.importNode(template.content, true);

    document.querySelector('#sidebarContent').appendChild(clone);

  } else { //jQuery fallback

    $(function(){
      $("#sidebarContent").load("docs-sidebar.html"); // load docs-sidebar.html in docs sidebar
    });

  }

  //Add active class to sidebar links
  function sidebarActiveClass() {
    var curentFile = window.location.pathname.split("/").pop();
    $('.nav-sidebar > li > a[href="' + curentFile + '"]').parent().addClass('active');
  }

  sidebarActiveClass();


})(jQuery)
