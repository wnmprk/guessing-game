$(document).ready(function() {
	var correct = Math.floor(Math.random()*100);
	var totalGuesses = 5;
	$('input').on('submit', function(inp)) { //separate function of both buttons
		totalGuesses--;
		while totalGuesses > 0 {
			if (inp == correct) {
				alert('Yay!');
			}
		}
	}
})