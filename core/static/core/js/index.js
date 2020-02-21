alert("Hola");
$(document).on("ready", function() {
  $(this).keydown(function(event) {
    var anuncio_display = $(".anuncio-container").css("display");
    if (anuncio_display === "flex") {
      $(".anuncio-container").css({ display: "none" });
    }
  });
});
$("#close-advice").on("click", function() {
  $(".anuncio-container").css({ display: "none" });
});

function display_alert() {
  $(".anuncio-container").css({ display: "flex" });
}