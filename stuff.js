$(document).ready(function() {
	
	//submits guess with enter/return key
	$(document).bind('keypress', function(e) {
        if(e.keyCode==13){
             $('#submitGuess').trigger('click');
        }
    });

	//initiate variables
	var correct = Math.floor(Math.random()*100) + 1;
	var attempts = 5;
	var different = 0;
	var guesses = [];

	//function for submitting guesses
	$('#submitGuess').on('click', function() {
		//input value is current value
		var current = Number($('input').val());

		//when guess is correct. doesnt work?
		if (current === correct && attempts > 0) {
			$('body').css('background-image','url(winner.jpg)');
			attempts = 0;
			$('#hotOrCold').fadeIn().text("you guessed correctly!");
			$('#remainder').fadeIn().text('yay!');
		}
		//checking to make sure input is valid
		else if (!($.isNumeric(current)) || current > 100 || current < 1) {
			$('#hotOrCold').fadeIn().text('guess an integer value between 1 and 100 please');
		}
		//when guess is incorrect
		else if (current !== correct) {
			//only push new guesses into array
			if (guesses.indexOf(current) === -1) {
				//push valid inputs into array and decrement attempts
				guesses.push(current);
				attempts--;
				$('#remainder').text(attempts + " guesses left");
				//when guess is too high
				if (current > correct && attempts !== 0) {
					var tooHigh = current - correct;
					if (tooHigh > 50) {
						$('#hotOrCold').fadeIn().text('colder than antarctica! guess lower...');
						$('body').css("background-color","#87cefa");
					}
					else if (tooHigh >= 30) {
						$('#hotOrCold').fadeIn().text('cold cold cold! guess lower...');
						$('body').css("background-color","#9de24f");
					}
					else if (tooHigh >= 10) {
						$('#hotOrCold').fadeIn().text('getting warmer! guess lower...');
						$('body').css("background-color","#FFE303");						
					}
					else if (tooHigh >= 5) {
						$('#hotOrCold').fadeIn().text('hot hot hot! guess lower...');	
						$('body').css("background-color","#ffbd55");					
					}
					else {
						$('#hotOrCold').fadeIn().text('hotter than death valley! guess lower...');
						$('body').css("background-color","#ff6666");
					}
				}

				//when guess is too low
				else if (current < correct && attempts !== 0) {
					var tooLow = correct - current;
					if (tooLow >= 50) {
						$('#hotOrCold').fadeIn().text('freezing cold! guess higher...');
						$('body').css("background-color","#87cefa");
					}
					else if (tooLow >= 25) {
						$('#hotOrCold').fadeIn().text('cold cold cold! guess higher...');
						$('body').css("background-color","#9de24f");
					}
					else if (tooLow >= 10) {
						$('#hotOrCold').fadeIn().text('getting warmer! guess higher...');
						$('body').css("background-color","##FFE303");							
					}
					else if (tooLow >= 5) {
						$('#hotOrCold').fadeIn().text('hot hot hot! guess higher...');
						$('body').css("background-color","#ffbd55");						
					}
					else {
						$('#hotOrCold').fadeIn().text('burning hot! guess higher...');
						$('body').css("background-color","#ff6666");
					}
				}
				else if (attempts < 1 && current !== correct) {
					$('#hotOrCold').fadeIn().text('the answer is ' + correct + "!");
					$('#remainder').fadeIn().text('game over');
					$('body').css("background-color","black");
				}
			}
			else {
				$('#hotOrCold').fadeIn().text("you already guessed " + current);
				$('#remainder').text(attempts + " guesses left");
			}
		}
	});

	//resets game
	$('#resetGame').on('click', function() {
		location.reload();
	});

	//gives hint/answer
	$('#hint').on('click', function() {
		var minus = Math.floor(Math.random()*100) + 1;
		var hintNum = correct - minus;
		$('#remainder').text(hintNum + " + " + minus);
	});
});