let firstName;

welcome();

function welcome() {
   firstName = prompt("What is your first name?");
   document.getElementById(
      "welcome"
   ).innerHTML = `Are you ready to play the game ${firstName}?`;
}
