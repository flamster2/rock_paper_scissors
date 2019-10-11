let overallScoreP1 = 0;
let overallScoreCom = 0;

let scoreP1 = 0;
let scoreCom = 0;
let counter = 0;
let rounds = 0;

let playerName = "";

let difficultyLevel = "normal";

document.getElementById("playerNameBigScore").innerHTML = "";
document.getElementById("bigScoreNumberPlayer").innerHTML = "";
document.getElementById("comNameBigScore").innerHTML = "";
document.getElementById("bigScoreNumberCom").innerHTML = "";

function enterName() {
  playerName = prompt("What's your name?");

  if ((input === null)) {
    return;
  } else {
    document.getElementById("greeting").innerHTML =
      "Hello " + playerName + ", let's go!";

    overallScoreCom = 0;
    overallScoreP1 = 0;
    document.getElementById("overallScore").innerHTML =
      "Overall score: " +
      playerName +
      " " +
      overallScoreP1 +
      ":" +
      " " +
      overallScoreCom +
      " Computer";

    ddocument.getElementById("playerNameBigScore").innerHTML = "";
    document.getElementById("bigScoreNumberPlayer").innerHTML = "";
    document.getElementById("comNameBigScore").innerHTML = "";
    document.getElementById("bigScoreNumberCom").innerHTML = "";
  }
  document.getElementById("playerName").innerHTML = "Hi, " + playerName + "!";
}

function reset() {
  overallScoreCom = 0;
  overallScoreP1 = 0;
  document.getElementById("overallScore").innerHTML =
    "Overall score: " +
    playerName +
    " " +
    overallScoreP1 +
    ":" +
    " " +
    overallScoreCom +
    " Computer";
  document.getElementById("playerNameBigScore").innerHTML = "";
  document.getElementById("bigScoreNumberPlayer").innerHTML = "";
  document.getElementById("comNameBigScore").innerHTML = "";
  document.getElementById("bigScoreNumberCom").innerHTML = "";

  document.getElementById("result").innerHTML = "";
      document.getElementById("round").innerHTML = "";
      document.getElementById("greetingRounds").innerHTML = "";
      document.getElementById("score").innerHTML = "";

      document.getElementById("choose").style.display = "none";

      document.getElementById("bestOf").style.display = "none";

      document.getElementById("greetingDifficulty").innerHTML = "";

      document.getElementById("greeting").innerHTML = "";
}

function newGame() {
    if ((playerName === null) || (playerName.length == 0)) {
      enterName();
      newGame();
    } else {
      rounds = 0;

      scoreP1 = 0;
      scoreCom = 0;
      counter = 0;

      document.getElementById("result").innerHTML = "";
      document.getElementById("round").innerHTML = "";
      document.getElementById("greetingRounds").innerHTML = "";
      document.getElementById("score").innerHTML = "";

      document.getElementById("choose").style.display = "none";

      document.getElementById("bestOf").style.display = "block";

      document.getElementById("greetingDifficulty").innerHTML = "";

      document.getElementById("playerNameBigScore").innerHTML = "";
  document.getElementById("bigScoreNumberPlayer").innerHTML = "";
  document.getElementById("comNameBigScore").innerHTML = "";
  document.getElementById("bigScoreNumberCom").innerHTML = "";
    }
  }

function difficulty(input) {
  difficultyLevel = input;
  document.getElementById("selectedDifficulty").innerHTML =
    "Difficulty: " + difficultyLevel;
}

function bestOf(bestOfInput) {
  rounds = bestOfInput;
  if (rounds == 1) {
    const textNodeRounds = document.createTextNode(
      "We will play " + rounds + " round."
    );
    greetingRounds.appendChild(textNodeRounds);
  } else {
    const textNodeRounds = document.createTextNode(
      "We will play " + rounds + " rounds."
    );
    greetingRounds.appendChild(textNodeRounds);
  }

  document.getElementById("bestOf").style.display = "none";
  document.getElementById("choose").style.display = "block";
  document.getElementById("greetingDifficulty").innerHTML =
    "The difficulty is " + difficultyLevel.toLowerCase() + ".";

    document.getElementById("playerNameBigScore").innerHTML = playerName;
    document.getElementById("bigScoreNumberPlayer").innerHTML = "0";
    document.getElementById("comNameBigScore").innerHTML = "Computer"
    document.getElementById("bigScoreNumberCom").innerHTML = "0"
}

function oneRoundNormal(playerChoice) {
  choice = ["rock", "paper", "scissors"];

  if (rounds == counter) {
    alert("Press 'New Game' to play again!");
  } else {
    computerChoice = Math.floor(Math.random() * 3);

    if (choice[computerChoice] == "rock") {
      if (playerChoice == "paper") {
        document.getElementById("result").innerHTML =
          "Computer chose rock. Paper beats rock. You win!";
        console.log("Paper beats rock. " + playerName + " wins!");
        scoreP1++;
        counter++;
        document.getElementById("score").innerHTML =
          "The score is: " +
          playerName +
          " " +
          scoreP1 +
          ":" +
          scoreCom +
          " Computer";
      } else if (playerChoice == "scissors") {
        document.getElementById("result").innerHTML =
          "Computer chose Rock. Rock beats scissors. Computer wins!";
        console.log("Rock beats scissors. Computer wins!");
        scoreCom++;
        counter++;
        document.getElementById("score").innerHTML =
          "The score is: " +
          playerName +
          " " +
          scoreP1 +
          ":" +
          scoreCom +
          " Computer";
      } else {
        document.getElementById("result").innerHTML =
          "Computer chose rock. Its a draw!";
        console.log("It's a draw!");
        counter++;
        document.getElementById("score").innerHTML =
          "The score is: " +
          playerName +
          " " +
          scoreP1 +
          ":" +
          scoreCom +
          " Computer";
      }
    } else if (choice[computerChoice] == "scissors") {
      if (playerChoice == "rock") {
        document.getElementById("result").innerHTML =
          "Computer chose scissors. Rock beats scissors. You win!";
        console.log("Rock beats scissors. " + playerName + " wins!");
        scoreP1++;
        counter++;
        document.getElementById("score").innerHTML =
          "The score is: " +
          playerName +
          " " +
          scoreP1 +
          ":" +
          scoreCom +
          " Computer";
      } else if (playerChoice == "paper") {
        document.getElementById("result").innerHTML =
          "Computer chose scissors. Scissors beat paper. Computer wins!";
        console.log("Scissors beat paper. Computer wins!");
        scoreCom++;
        counter++;
        document.getElementById("score").innerHTML =
          "The score is: " +
          playerName +
          " " +
          scoreP1 +
          ":" +
          scoreCom +
          " Computer";
      } else {
        document.getElementById("result").innerHTML =
          "Computer chose scissors. Its a draw!";
        console.log("It's a draw!");
        counter++;
        document.getElementById("score").innerHTML =
          "The score is: " +
          playerName +
          " " +
          scoreP1 +
          ":" +
          scoreCom +
          " Computer";
      }
    } else if (choice[computerChoice] == "paper") {
      if (playerChoice == "rock") {
        document.getElementById("result").innerHTML =
          "Computer chose paper. Paper beats rock. Computer wins!";
        console.log("Paper beats rock. Computer wins!");
        scoreCom++;
        counter++;
        document.getElementById("score").innerHTML =
          "The score is: " +
          playerName +
          " " +
          scoreP1 +
          ":" +
          scoreCom +
          " Computer";
      } else if (playerChoice == "scissors") {
        document.getElementById("result").innerHTML =
          "Computer chose paper. Scissors beat paper. You win!";
        console.log("Scissors beat paper. " + playerName + " wins!");
        scoreP1++;
        counter++;
        document.getElementById("score").innerHTML =
          "The score is: " +
          playerName +
          " " +
          scoreP1 +
          ":" +
          scoreCom +
          " Computer";
      } else {
        document.getElementById("result").innerHTML =
          "Computer chose paper. It's a draw!";
        console.log("It's a draw!");
        counter++;
        document.getElementById("score").innerHTML =
          "The score is: " +
          playerName +
          " " +
          scoreP1 +
          ":" +
          scoreCom +
          " Computer";
      }
    }

    if (rounds - counter == 1) {
      document.getElementById("round").innerHTML = "1 round left.";
    } else if (counter < rounds) {
      document.getElementById("round").innerHTML =
        rounds - counter + " rounds left.";
    }

    if (scoreCom + (rounds - counter) < scoreP1) {
      document.getElementById("round").innerHTML =
        "The game is over! You beat Computer " + scoreP1 + ":" + scoreCom + ".";
      alert(
        "The game is over! You beat Computer " + scoreP1 + ":" + scoreCom + "."
      );
      document.getElementById("overallScore").style.display = "block";
      overallScoreP1++;
    } else if (scoreP1 + (rounds - counter) < scoreCom) {
      document.getElementById("round").innerHTML =
        "The game is over! Computer beat you " + scoreCom + ":" + scoreP1 + ".";
      alert(
        "The game is over! Computer beat you " + scoreCom + ":" + scoreP1 + "."
      );
      document.getElementById("overallScore").style.display = "block";
      overallScoreCom++;
    } else if (rounds == counter && scoreP1 == scoreCom) {
      document.getElementById("round").innerHTML =
        "The game is over! You and Computer drew " +
        scoreP1 +
        ":" +
        scoreCom +
        ".";
      alert(
        "The game is over! You and Computer drew " +
          scoreP1 +
          ":" +
          scoreCom +
          "."
      );
      document.getElementById("overallScore").style.display = "block";
    }
    document.getElementById("overallScore").innerHTML =
      "Overall score: " +
      playerName +
      " " +
      overallScoreP1 +
      ":" +
      " " +
      overallScoreCom +
      " Computer";
  }
  document.getElementById("bigScoreNumberPlayer").innerHTML = scoreP1;
  document.getElementById("bigScoreNumberCom").innerHTML = scoreCom;
}
