let size = 100;
let count = 0;

function noButton() {
  size += 10;
  document.getElementById("yesBtn").style.fontSize = size + "px";

  let noText = ["No", "Are you sure?", "Certain?", "Really?", ":(", "Pleasssseeee", "Rude", "Come onnnnnn"];
  let randomIndex = Math.floor(Math.random() * noText.length);
  document.getElementById("noBtn").innerHTML = noText[randomIndex];

  count++;

  // Add code to move the "No" button randomly
  const noButton = document.getElementById("noBtn");
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;
  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  noButton.style.position = 'absolute'; // Make sure your CSS allows for this
  noButton.style.left = `${newX}px`;
  noButton.style.top = `${newY}px`;
}


// When Yes button is clicked, display fireworks and change screen
function yesButton() {
  document.getElementById("mainContainer").style.display = "none";
  // Personalized message and background color change
    document.getElementById("yesContainer").style.display = "block";
    // Change background color to match gif
    document.body.style.backgroundColor = "rgb(255, 223, 229)";

    //Now this is where shit gets interesting. Basically read the jsdeliver docs and copied this mathy crap: https://www.jsdelivr.com/package/npm/canvas-confetti
     // Trigger confetti burst
  var duration = 15 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
  }, 250);
}
