let firstName = "";
let score = 0;
welcome();

$(document).ready(function () {
   console.log("load first " + score);
   $("#gamespace").prepend(
      "<img src='./img/baseball.png' alt='Baseball' id='baseball' />"
   );

   $("#timer").show();
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

   alert(`x: ${randomXCoordinate()} y: ${randomYCoordinate()}`);

   $("#start_button").click(function () {
      alert();
   });

   incrementScore();
});

function welcome() {
   firstName = prompt("What is your first name?");
   $("#welcome").html(`Are you ready to play the game ${firstName}?`);
}

function randomXCoordinate() {
   let length = $("#gamespace").width();
   return Math.floor(Math.random() * length);
}

function randomYCoordinate() {
   let width = $("#gamespace").width();
   return Math.floor(Math.random() * width);
}

function incrementScore() {
   score += 1;
   if ((score = 1)) {
      $("#score").text(`${score} hit`);
   } else {
      $("#score").text(`${score} hits`);
   }
}
