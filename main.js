const breakInt = 100;
const firstPrime = 3;
const secondPrime = 5;

for( let i = 1; i <= breakInt; i++){
    if(i % firstPrime === 0){
        console.log("Fizz");
    } else if(i % secondPrime === 0){
        console.log("Buzz");
    } else if(i % (firstPrime * secondPrime) == 0){
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}
