let size = 100;

function noButton() {
  size += 10;
  document.getElementById("yesBtn").style.fontSize = size + "px";
}

// When Yes button is clicked, display fireworks and change screen
function yesButton() {
  document.getElementById("mainContainer").style.display = "none";
  // Personalized message and background color change
    document.getElementById("yesContainer").style.display = "block";
    // Change background color to match gif
    document.body.style.backgroundColor = "rgb(255, 223, 229)";
}
