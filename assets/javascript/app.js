$(document).ready(function(){

// create global variables
var count = 10;
var computerGuess;
var userGuess;
var questionGuess;
var gamesPlayed;
var gamesWon;
var gamesLost;
var questionArray = [];
var topics = ["BIOLOGY", "MATH", "MOVIES", "COMPUTERS"];
// functions
function newGame() {
	$("#question-display, #answers").empty();
	var reStart = $("<button>");
	reStart.attr("id", "start-button")
	reStart.text("Start");
	$("#question-display").append(reStart);
}

function gameRestart() {
	gamesWon++;
	$("#answers").empty();
	$("#question-display").text("Correct!")
	setTimeout(newGame, 500)
}



//Array of possible answers
var math = ["1", "pi", "0", "root(-1)", "2.667561", "infinity"]
var bio = ["Ribosomes", "Mitocondria", "R.N.A."];
var mvs = ["Jurasic Park", "The Lost World", "III", "Jurasic World"];
var cs = [";", ":", "-", "}"];

// Starts the game
	$("#start-button").on("click", function(){
	var timer = setInterval(function() {
  			count=count-1;
  				if (count <= 0) {
     				clearInterval(counter);
     			gamesLost++;
     			newGame();
  				}
 			$("#timer-display").html("You have " + count + " secs left");
			}, 1000);

	//1. start the game and erase the "Start" button
	$("#question-display").empty();
		gamesPlayed++;
	// Create an array with the list of the question topics along with an array of guesses for each topic
	//an arry within an array if you will.
		computerGuess = topics[Math.floor(Math.random()*topics.length)];
		console.log (computerGuess);

	//2. Place the question in the the id "question-display"
		if (computerGuess === "MATH") {
			questionGuess = "e^(i*pi) + 1 = ?";
			questionArray = math;
			//$("#").css("background-image", "url(/assets/images/Euler.jpg")
		}
		else if (computerGuess === "BIOLOGY") {
			questionGuess = "What is inside the nucleus of a cell, other than D.N.A.?";
			questionArray = bio;
			//$("#").css("background-image", "url(/assets/images/Euler.jpg")
		}
		else if(computerGuess === "MOVIES") {
			questionGuess = "What movie does Jurasic Park Movie does Vince Von come out in?";
			questionArray = mvs;
			//$("#").css("background-image", "url(/assets/images/Euler.jpg")
		}
		else {
			questionGuess = "What is the symbol to end a line of code in most Computer Languages?"
			questionArray = cs;
			//$("#").css("background-image", "url(/assets/images/Euler.jpg")
		}
	$("#question-display").html("<h1>" + questionGuess + "</h1>");
	//3. Create a for loop that will create buttons from the answers array
        for (var i = 0; i < questionArray.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var btn = $("<button>");
          // Adding a class
          btn.addClass("answer-button");
          // Added a data-attribute
          btn.attr("value", questionArray[i]);
          // Provided the initial button text
          btn.text(questionArray[i]);
          // Added the button to the HTML
          $("#answers").append(btn);

        }
	//4. Create a timer and display the timer at the id "timer-display"
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
			return;
		}
	});

	setTimeout(newGame, 10000);
	});
	//5. Create an event handler that will allow the user to choose an answer
	//6. In the event handler check if the user has chosen the correct answer




/* clear the "display-question" and "answers" divs and place "Your Score so far:" 
	in the the "display-question" along with the tally. 
*/


});