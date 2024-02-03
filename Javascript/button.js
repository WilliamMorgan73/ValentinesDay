let size = 100;
let count = 0;

function noButton() {
  size += 10;
  document.getElementById("yesBtn").style.fontSize = size + "px";

  // Change the text on the no button in a random way
  let noText = ["No", "Are you sure?", "Certain?", "Really?", ":(", "Pleasssseeee", "Rude", "Come onnnnnn"];
  let randomIndex = Math.floor(Math.random() * noText.length);
  document.getElementById("noBtn").innerHTML = noText[randomIndex];

  // Keep track of how many times the no button is clicked
  count++;
}

// When Yes button is clicked, display fireworks and change screen
function yesButton() {
  document.getElementById("mainContainer").style.display = "none";
  // Personalized message and background color change
    document.getElementById("yesContainer").style.display = "block";
    // Change background color to match gif
    document.body.style.backgroundColor = "rgb(255, 223, 229)";

    // Add count to the message
    let message = "You clicked no " + count + " times!";
    document.getElementById("yesMessage").innerHTML = message;
}
