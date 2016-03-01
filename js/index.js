// var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

// 	console.log(cities[2]);

// for (var i = 0; i < cities.length; i++) {
// 	console.log(cities[i]);

// 	$('#city-options').append('<option value='+cities[i]+'>'+cities[i]+'</option>');

		
// }    

 

// for(cities = 0; b < arr.length; ++b){
// 	console.log( arr[i] );
// 	arr[ i ];
// }

// user enters city name

// user clicks update


$('#submit-btn').on('click',function(){
	event.preventDefault();
	var userInput = $('#city-type').val();
	console.log(userInput);	
	$('#city-type').val('');
	userInput = userInput.toLowerCase().trim();

	if(userInput === 'new york' || userInput === 'nyc' || userInput === "new york city"){
		$('body').attr('class', 'nyc');
	}	

	if(userInput === 'sf' || userInput === 'san francisco' || userInput === "bay area"){
		$('body').attr('class', 'sf');
	}	
	if(userInput === 'la' || userInput === 'los angeles' || userInput === "cali"){
		$('body').attr('class', 'la');
	}
	if(userInput === 'austin' || userInput === 'texas' || userInput === "guns"){
		$('body').attr('class', 'austin');
	}	
	if(userInput === 'sydney' || userInput === 'australia' || userInput === "kangaroos"){
		$('body').attr('class', 'sydney');
	}	

});



// user clicks update
// on click, background changes to city

// assigning a value to a var


// .change

// use and array with city names
// from that array use a for loop