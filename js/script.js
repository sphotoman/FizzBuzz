//if not prompt, then use jQuery 
var inputValue = prompt("What value do you want fizzbuzz to count to?");

var inputValueNum = Number(inputValue);

function fizzBuzzFunction(userNumber){
    for (var i = 1; i < userNumber; i++) {
       if (i%3 + i%5 == 0) {
           //add DOM element containing "FizzBuzz"
            console.log('FizzBuzz');
    } else if (i%3 == 0) {
        //add DOM element containing "Fizz"
            console.log('Fizz');
    } else if (i%5 == 0) {
        //
            console.log('Buzz');
    }  else {
            console.log(i);
        }
    }
}

//examples of function calls with a single argument
fizzBuzzFunction(inputValueNum);


