$("#play").on("click", function() {
  var menu = false;
  if ($("#play").text() === "Jugar!") {
    $(".form-jugar").css({ bottom: "0em" });
    $("#play").text("Cerrar");

    $(".form-register").css({ top: "-30em" });
  } else {
    $(".form-jugar").css({ bottom: "-35em" });
    $("#play").text("Jugar!");
    $(".form-register").css({ top: "-30em" });
  }
});

$("#register").on("click", function() {
  var menu2 = false;
  if (menu2) {
    $(".form-register").css({ top: "-30px" });
  } else {
    $(".form-register").css({ top: "0px" });
    $(".form-jugar").css({ bottom: "-35em" });
  }
});

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