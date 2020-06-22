document.getElementById("nav-container").style.transition = "all .6s";

window.onscroll = function() {
  if(document.scrollingElement.scrollTop > 100) {
    document.getElementById("nav-container").style.background = "rgba(0, 0, 0, 0.5)";
  } else if (document.scrollingElement.scrollTop < 100) {
    document.getElementById("nav-container").style.background = "rgba(0, 0, 0, 0)";
  }
}
