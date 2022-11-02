let firstName;
let score = 0;
let secondsRemaining = 30;
welcome();

$(document).ready(function () {
   $("#start_button").css({
      "font-size": "18px",
      "font-weight": "bold",
      "font-family": "Roboto-Medium",
      "background-color": "antiquewhite",
      color: "var(--brown)",
      "border-radius": ".5em",
      width: "80px",
      height: "54px",
   });

   $("#start_button").click(function () {
      start();
   });
});

function welcome() {
   firstName = prompt("What is your first name?");
   $("#welcome").html(`Are you ready to play the game ${firstName}?`);
}

function start() {
   incrementScore();
   timer();
   addImage();
   console.log(`x: ${randomXCoordinate()} y: ${randomYCoordinate()}`);
}

function randomXCoordinate() {
   let length = $("#gamespace").width();
   return Math.floor(Math.random() * length);
}

function randomYCoordinate() {
   let width = $("#gamespace").width();
   return Math.floor(Math.random() * width);
}

function timer() {
   secondsRemaining -= 1;
   $("#timer").html(`${secondsRemaining} seconds left.`);
}

function incrementScore() {
   score += 1;
   if (score == 1) {
      $("#score").text(`${score} hit`);
   } else {
      $("#score").text(`${score} hits`);
   }
}

function addImage() {
   $("#gamespace").prepend(
      "<img src='./images/baseball.png' alt='Baseball' id='baseball' />"
   );
}
