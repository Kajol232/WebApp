let userScore  = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
    const options = ["r", "p", "s"];
    const rand = Math.floor(Math.random() * 3);

    return options[rand];
}

function convertLetterToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(user, comp) {
    const supUWord = "user".fontsize(3).sup();
    const supCWord = "comp".fontsize(3).sup();

  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = computerScore;

    result_p.innerHTML = convertLetterToWord(user) + supUWord + " beats " + convertLetterToWord(comp)
        + supCWord + ". You win!";
}

function lose(user, comp) {
    const supUWord = "user".fontsize(3).sup();
  const supCWord = "comp".fontsize(3).sup();

  computerScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = computerScore;

    result_p.innerHTML = convertLetterToWord(user) + supUWord + " loses to " + convertLetterToWord(comp)
        + supCWord + ". You lose!";
}

function draw(user, comp) {
    const supUWord = "user".fontsize(3).sup();
  const supCWord = "comp".fontsize(3).sup();

  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = computerScore;

    result_p.innerHTML = convertLetterToWord(user) + supUWord + " equals " + convertLetterToWord(comp)
        + supCWord + ". Its a draw!";
}

function game(userChoice) {

  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":

      win(userChoice, compChoice);
      break;

    case "rp":
    case "ps":
    case "sr":

      lose(userChoice, compChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, compChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => game("r"));

  paper_div.addEventListener("click", () => game("p"));

  scissors_div.addEventListener("click", () => game("s"));
}

main();
