$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});


document.querySelector(".window__close").addEventListener("click", () => {
  document.querySelector("body").style.display = "none";

  setTimeout(() => {
    window.alert(
      "Oh No! What did you do? You've crashed my portfolio! Now you have to refresh to open the app again("
    );
  }, 500);
});
