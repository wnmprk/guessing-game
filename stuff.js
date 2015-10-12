$(document).ready(function() {
	var correct = Math.floor(Math.random()*100);
	var totalGuesses = 5;
	$('input').on('click', function(inp)) {
		totalGuesses--;
		while totalGuesses > 0 {
			if (inp == correct) {
				alert('Yay!');
			}
		}
	}
})