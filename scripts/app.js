let firstName = "";
let score = 0;
let secondsRemaining = 30;
welcome();

$(document).ready(function () {
   $("#gamespace").on("click", "img", incrementScore);
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
   //TODO: clear the timer and start counting down when start button gets clicken during a game
   $("#start_button").click(function () {
      $("#score").show();
      start();
   });
});

function welcome() {
   firstName = prompt("What is your first name?");
   $("#welcome").html(`Are you ready to play the game ${firstName}?`);
}

//when using ES6 arrow function stardards the following error is logged when the
//function is called at the top of the program

// Uncaught ReferenceError: can't access lexical declaration 'welcome' before initialization

// const welcome = () => {
//    firstName = prompt("What is your first name?");
//    $("#welcome").html(`Are you ready to play the game ${firstName}?`);
// };

const start = () => {
   timer();
};

const timer = () => {
   if (secondsRemaining != -1) {
      //count down 30 -- 0
      $("#timer").html(`${secondsRemaining} seconds left.`);
      secondsRemaining--; // will be -1 at the end
      setTimeout("addImage()", 2000); // rethink how to call images outside of the timer function as it does not fit the single purpose of this funciton
      setTimeout("timer()", 1000);
   } else {
      clearTimeout(timer);
      clearScore();
      gameOver();
   }
};

const clearScore = () => {
   score = 0;
};
const incrementScore = () => {
   score++;
   $("#score span").html(score);
};

const addImage = () => {
   $("#gamespace").prepend(
      "<img src='./images/baseball.png' alt='Baseball' id='baseball' />"
   );
};

const randomXCoordinate = () => {
   let length = $("#gamespace").width();
   return Math.floor(Math.random() * length);
};

const randomYCoordinate = () => {
   let width = $("#gamespace").width();
   return Math.floor(Math.random() * width);
};

const gameOver = () => {
   alert("Game Over!");
};
