/*Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18. 

Use the Parameter Testing feature in the box below to test your code with different arguments.*/



// create firstFactorial function that takes in one param(num)
var firstFactorial = function(num){
	// create an empty array called values
	var values = [];

	// use for loop with variable i equal to num; as long as i is less than or equal to num, i will increment by 1
	for(var i = 1; i <= num; i++){
		// push each current value of i into the values array
		values.push(i);
	}
	// return eval invoked on the joined values array with "*"
	return eval(values.join('*'));
};