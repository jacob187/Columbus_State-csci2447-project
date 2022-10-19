// let firstName;
// let score;

welcome();

$(document).ready(function () {
   $("#gamespace").prepend(
      "<img src='./img/baseball.png' alt='Baseball' id='baseball' />"
   );

   $(".timer").show();
   $("#start_button").css({
      "font-size": "18px",
      "font-weight": "bold",
      "font-family": "Roboto-Medium",
      "background-color": "antiquewhite",
      color: "rgb(73, 49, 16)",
      "border-radius": ".5em",
      width: "80px",
      height: "54px",
   });

   alert(`x: ${random_x_coordinate()} y: ${random_y_coordinate()}`);

   $("#start_button").click(function () {
      alert();
   });

   score();
});

function welcome() {
   firstName = prompt("What is your first name?");
   $("#welcome").html(`Are you ready to play the game ${firstName}?`);
}

function random_x_coordinate() {
   let length = $("#gamespace").width();
   return Math.floor(Math.random() * length);
}

function random_y_coordinate() {
   let width = $("#gamespace").width();
   return Math.floor(Math.random() * width);
}

function score() {
   let score = 0;
   score += 1;
   $("#score").html(`${score} hits`);
}
