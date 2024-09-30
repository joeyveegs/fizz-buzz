let userNumber = parseInt(prompt("Enter a number you'd like to FizzBuzz up to:"));

for (let i = 1; i <= userNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");    
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else {
    console.log(i);        
    }
}