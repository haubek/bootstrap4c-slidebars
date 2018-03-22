(function($) {
  var controller = new slidebars();
  controller.init();
  $('.navbar-toggle-offcanvas-left').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    controller.toggle('offcanvas-left');
  });
  $('.navbar-toggle-offcanvas-right').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    controller.toggle('offcanvas-right');
  });
})(jQuery);
