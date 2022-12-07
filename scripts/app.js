let firstName = "";
let score = 0;
let secondsRemaining = 30;
let gameOver;

$(document).ready(function () {
   welcome();
   $("footer").load("load.html");
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

   $("#start_button").click(function () {
      $("#score").show();
      start();
   });
});

const welcome = () => {
   firstName = prompt("What is your first name?");
   $("#welcome").html(`Are you ready to play the game ${firstName}?`);
};

const start = () => {
   $("#start_button").off("click");
   gameTimer();
   imageTimer();
};

const gameTimer = () => {
   if (secondsRemaining != 0) {
      $("#timer").html(`${secondsRemaining} seconds left.`);
      secondsRemaining--;
      setTimeout(gameTimer, 1000);
   } else {
      clearTimeout(gameTimer);
      clearTimeout(imageInterval);
      clearScore();
   }
};

const clearScore = () => {
   score = 0;
};

const incrementScore = (e) => {
   score++;
   $("#score span").html(score);
   $(e.target).remove();
};

const addImage = () => {
   let imagePosition = imageGameSpaceCoordinate();
   $("#gamespace").prepend(
      `<img src='./images/baseball.png' alt='Baseball' id='baseball' style=' left: ${imagePosition.width}px; top: ${imagePosition.height}px;'/>`
   );
};

const imageTimer = () => {
   imageInterval = setTimeout(() => {
      addImage();
      imageTimer();
   }, generateRandomNumber(2000));
};

const imageGameSpaceCoordinate = () => {
   let coordinate = {
      height: generateRandomNumber($("#gamespace").height() - 33.5),
      width: generateRandomNumber($("#gamespace").width() - 33.5),
   };
   return coordinate;
};

const generateRandomNumber = (num) => Math.floor(Math.random() * num);
