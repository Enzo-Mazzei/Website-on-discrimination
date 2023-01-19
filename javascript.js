function zoomMenu(x) {
    x.classList.toggle("change");
  }
  function showMenu() {
    let x = document.getElementById("myNav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
