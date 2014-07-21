$(function() {
	(function() {
		
		$('#form').on('submit', function(e) {
			e.preventDefault();

			// cache jQuery selections
			var $output = $('#output');
			var $userInput = $('#user-input');

			// get input string, lowercase it, and strip non alphanumeric chars
			var userInput = $userInput.val().toLowerCase();
			userInput = userInput.replace(/\W+/g, '');


			// if the input is a palindrome, update the text appropriately; if not, update the text appropriately
			if( isPalindrome(userInput) )
			{
				$output.text("Congratulations! '" + userInput + "' is a palindrome.");
				$output.removeClass().addClass('palindrome');
				$userInput.removeClass().addClass('green-check');
			}
			else
			{
				$output.text("Sorry, '" + userInput + "' is not a palindrome.");
				$output.removeClass().addClass('sorry');
				$userInput.removeClass().addClass('red-x');
			}
		});


		function isPalindrome(string)
		{
			userInput = string;

			// convert string to array
			var array1 = userInput.split('');

			// make a reversed copy of array1
			var array2 = array1.slice().reverse();

			// loop over each index in both arrays and compare the values
			for( var i = 0; i < array1.length; i++ )
			{
				if( array1[i] != array2[i] )
				{
					return false;
				}

				// only return true once we have checked the last index of both arrays
				if( i == (array1.length - 1) )
				{
					return true;
				}
			}
		}

	})();
});