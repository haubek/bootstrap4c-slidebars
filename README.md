# Bootstrap4C

### slidebars

The Bootstrap4C Slidebars is a lightweight Bootstrap 4 styled component for the sweet Slidebars plugin (https://github.com/adchsm/Slidebars) by **adchsm**. This component make Slidebars work better with Bootstrap 4.

See demo here => https://haubek.github.io

### Yarn install

```
yarn add bootstrap4c-slidebars
```

### CSS

```
<link href="path/to/component-slidebars.min.css" rel="stylesheet">
```

### HTML5 markup

See `example.html`

### Javascript

```
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
```

