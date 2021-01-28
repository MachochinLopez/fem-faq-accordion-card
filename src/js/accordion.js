$(".accordion__item").click(function() {
  // Cierra todos los demás.
  $(".accordion__item").removeClass("accordion__item--open");
  // Abre este acordeón.
  $(this).addClass("accordion__item--open");
});

