$(document).ready(function(){

//variables
var count = 60;
var computerGuess;
var userGuess;
var questionGuess;
var gamesPlayed= 0;
var gamesWon = 0;
var gamesLost = 0;
var questionArray = [];
var ifWon = false;
var isGameStarted = false;
var topics = ["BIOLOGY", "MATH", "MOVIES", "COMPUTERS"];
//Array of possible answers
var math = ["1", "pi", "0", "root(-1)", "2.667561", "infinity"]
var bio = ["Ribosomes", "Mitocondria", "R.N.A."];
var mvs = ["Jurasic Park", "The Lost World", "III", "Jurasic World"];
var cs = [";", ":", "-", "}"];

// functions
function newGame() {
	$("#answers, #timer-display, #question-display").empty();
	if (count != 0){
		count = 60;
		isGameStarted = false;
	}
}

function gameRestart() {
	gamesWon++;
	$("#answers").empty();
	$("#question-display").text("Correct!")
  		$( "#question-display" ).animate({
   				 width: "600px",
   				 opacity: 0.5,
   				 marginLeft: "0.6in",
   				 fontSize: "3em",
   				 borderWidth: "10px"
  				}, 800, function(){$(this).removeAttr("style")});
	  			setTimeout(1000);
	$("#wins").text(gamesWon);
}

function gameStart () {
	//1. start the game and erase the "Start" button
	$("#question-display, #answers").empty();
		gamesPlayed++;
	// Create an array with the list of the question topics along with an array of guesses for each topic
	//an arry within an array if you will.
		computerGuess = topics[Math.floor(Math.random()*topics.length)];
		console.log ("The Topic is: " + computerGuess);
		$("#games-played").text(gamesPlayed);

	//2. Place the question in the the id "question-display"
		if (computerGuess === "MATH") {
			questionGuess = "e^(i*pi) + 1 = ?";
			questionArray = math;
			$("#question").css("background-image", "url('C://users/pedro/code/triviagame/assets/images/euler.png')");
		}
		else if (computerGuess === "BIOLOGY") {
			questionGuess = "What is inside the nucleus of a cell, other than D.N.A.?";
			questionArray = bio;
			$("#question").css("background-image", "url('C://users/pedro/code/triviagame/assets/images/cell.png')");
		}
		else if(computerGuess === "MOVIES") {
			questionGuess = "What movie does Jurasic Park Movie does Vince Von come out in?";
			questionArray = mvs;
			$("#question").css("background-image", "url('C://users/pedro/code/triviagame/assets/images/jp.png')");
		}
		else {
			questionGuess = "What is the symbol to end a line of code in most Computer Languages?"
			questionArray = cs;
			$("#question").css("background-image", "url('C://users/pedro/code/triviagame/assets/images/Cs.png')");
		}
	$("#question-display").html("<h2>" + questionGuess + "</h2>");
	//Create a for loop that will create buttons from the answers array
        for (var i = 0; i < questionArray.length; i++) {
          var btn = $("<button>");
          btn.addClass("answer-button");
          btn.attr("value", questionArray[i]);
          btn.text(questionArray[i]);
          $("#answers").append(btn);
        }
	//Checks if the user chose the correct answer if not puts up alert
	$(".answer-button").on("click", function() {
		userGuess = this.value;
		console.log("The Users Guess is: " + userGuess);
		if (userGuess === "R.N.A.") {
			gameRestart();
		}
		else if (userGuess === "0") {
			gameRestart();
		}
		else if (userGuess === "The Lost World") {
			gameRestart();
		}
		else if (userGuess === ";") {
			gameRestart();
		}else {
			alert("Plese try again.");
			gamesLost++;
			$("#loses").text(gamesLost);
			return;
		}
	});
	if (count != 0) {
		setTimeout(gameStart, 10000);
	}else {
		newGame();
	}
}

// Starts the game
	$("#start-button").on("click", function(){
		if (isGameStarted === false) {
			gameStart();
			isGameStarted = true;

			//Starts the countdown
			if (isGameStarted) {
			var timer = setInterval(function() {
		  			count=count-1;
		  				if (count <= 0) {
		     				clearInterval(timer);
		     			isGameStarted = false;
		     			newGame();
		  				}
		 			$("#timer-display").html("You have " + count + " secs left");
					}, 1000);
			}
		}
	});
	
});