document.getElementById("nav-container").style.transition = "all .6s";
let navBGActive = false;

if(window.innerLength > 800) {
  let x = document.getElementById("top-nav");
  x.style.display = "flex";
}

window.onscroll = function() {
  if(document.scrollingElement.scrollTop > 100) {
    document.getElementById("nav-container").style.background = "rgba(0, 0, 0, 0.5)";
    navBGActive = true;
  } else if (document.scrollingElement.scrollTop < 100) {
    document.getElementById("nav-container").style.background = "rgba(0, 0, 0, 0)";
    navBGActive = false;
  }
}

function activateBurger() {
  let x = document.getElementById("top-nav");
  if(x.style.display === "flex") {
    x.style.display = "none"
    if(!navBGActive) {
      document.getElementById("nav-container").style.background = "rgba(0,0,0,0)";
    }
  } else {
    x.style.display = "flex";
    if(!navBGActive) {
      document.getElementById("nav-container").style.background = "rgba(0,0,0,0.5)";
    }
  }
}
