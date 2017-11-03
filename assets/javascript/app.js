$(document).ready(function(){

// create global variables



// functions


// Create the different game options

// Create an array with the list of the question topics along with an array of guesses for each topic
			//an arry within an array if you will.
		var topics = ["BIOLOGY", "MATH", "MOVIES", "COMPUTERS"];

		var computerGuess = topics[Math.floor(Math.random()*topics.length)];
		console.log (computerGuess);
// Create a click function that will 
$("#start-button").on("click", function(){
	//1. start the game and erase the "Start" button
	$("#question-display").empty();
	//2. Place the question in the the id "question-display"
	$("#question-display").html("<h1>" + "hello" + "</h1>");
	//3. Create a for loop that will create buttons from the answers array
	//4. Create a timer and display the timer at the id "timer-display"
	//5. Create an event handler that will allow the user to choose an answer
	//6. In the event handler check if the user has chosen the correct answer
});

/* clear the "display-question" and "answers" divs and place "Your Score so far:" 
	in the the "display-question" along with the tally. 
*/


});