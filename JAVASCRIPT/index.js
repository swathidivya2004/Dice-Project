function rollDice() {
    // Generate random numbers between 1 and 6 for both players
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Player 1 dice roll
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // Player 2 dice roll

    // Change the src attribute of the dice images based on the random numbers
    document.querySelector(".img1").setAttribute("src", "dice" + randomNumber1 + ".jpeg");
    document.querySelector(".img2").setAttribute("src", "dice" + randomNumber2 + ".jpeg");

    // Update the heading to declare a winner or a draw
    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
      document.querySelector("h1").innerHTML = "It's a Draw!";
    }
  }
  function resetGame() {
    // Reset dice images to default
    document.querySelector(".img1").setAttribute("src", "dice3.jpeg");
    document.querySelector(".img2").setAttribute("src", "dice3.jpeg");

    // Reset the heading text
    document.querySelector("h1").innerHTML = "Welcome";
  }
