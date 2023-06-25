
var enlaces = document.querySelectorAll("#menu a");

enlaces.forEach(function(enlace) {
  enlace.addEventListener("click", function() {

    enlaces.forEach(function(enlace) {
      enlace.classList.remove("clicked");
    });

    this.classList.add("clicked");
  });
});
