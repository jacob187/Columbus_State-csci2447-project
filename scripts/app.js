//Declare global variables
let firstName, score, secondsRemaining, gameOver, gamespace;

$(document).ready(function () {
   welcome();
   $("footer").load("../load.html");
   $("#gamespace").on("click", "img", incrementScore);

   //change start button styling when the page loads
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

   $("#start_button").on("click", start);
});

/**
 * Stores input of an alert to firstNamevariable
 * Writes the variable to the DOM at the id welcome
 */
const welcome = () => {
   while (!firstName) firstName = prompt("What is your first name?"); //requires input
   $("#welcome").html(`Are you ready to play the game ${firstName}?`);
};

const start = () => {
   //Initialize varibles
   secondsRemaining = 30;
   score = 0;
   $("#score").show();
   $("#start_button").off("click"); //turns off the click event liste
   gameTimer();
   imageTimer();
};

/**
 * Increase score, write to DOM, and remove image in the gamespace that is clicked
 * @param {Event Object} e
 */
const incrementScore = (e) => {
   score++;
   $("#score span").html(score);
   $(e.target).remove();
};

const gameTimer = () => {
   if (secondsRemaining < 0) {
      stopGame();
   } else {
      $("#timer").html(`${secondsRemaining} seconds left.`);
      secondsRemaining--;
      setTimeout(gameTimer, 1000); //Recursively calls function every second
   }
};
/**
 * Calls addimage and removeImage functions
 */
const imageTimer = () => {
   imageInterval = setTimeout(() => {
      addImage();
      removeImage();
      imageTimer();
   }, generateRandomNumber(2000)); //Recursively calls function randomly up to every 2000 miliseconds
};

/**
 * Adds baseball.png to a random location within the gamespace
 */
const addImage = () => {
   let imagePosition = imageGameSpaceCoordinate();
   $("#gamespace").prepend(
      `<img src='./images/baseball.png' alt='Baseball' id='baseball' style=' left: ${imagePosition.width}px; top: ${imagePosition.height}px;'/>`
   );
};

/**
 * Randomly removes an image from the no more than
 * three seconds
 */
const removeImage = () => {
   $("#gamespace img").hide(generateRandomNumber(3000));
};

/**
 * creates an object with cordiates within the gamespace of the image to appear
 * {y axis in the gamespace, x axis in the gamespace }
 * @returns {Object} coordinates
 */
const imageGameSpaceCoordinate = () => {
   let coordinates = {
      height: generateRandomNumber($("#gamespace").height() - 44.5),
      width: generateRandomNumber($("#gamespace").width() - 35.5),
   };
   return coordinates;
};

const stopGame = () => {
   //Clear the scheduled call of the functions gameTimer imageTimer
   clearTimeout(gameTimer);
   clearTimeout(imageInterval);
   alert(`Congradulations ${firstName}, you got a score of ${score}!`); //Alerts user of score
   resetGame();
};

const resetGame = () => {
   clearScore();
   $("#gamespace img").remove();
   $("#timer").html("");
   $("#score").hide();
   $("#start_button").on("click", start);
};

const clearScore = () => {
   score = 0;
   $("#score span").html(score);
};

/**
 * @param {Number} num
 * @returns random number up to num
 */
const generateRandomNumber = (num) => Math.floor(Math.random() * num);
