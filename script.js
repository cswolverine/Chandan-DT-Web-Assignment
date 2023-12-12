function toggleWidth() {
  var myDiv = document.querySelector("#left");
  var icon = document.querySelector("#arrow i");


  if (myDiv.classList.contains("expanded-width")) {
    myDiv.classList.remove("expanded-width");
    icon.className = "ri-arrow-right-line";
  } else {
    myDiv.classList.add("expanded-width");
    icon.className = "ri-arrow-left-line";
  }
}




