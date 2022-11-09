const log_view = document.getElementById("log");

const breakInt = 100;
const firstPrime = 3;
const secondPrime = 5;

for (let i = 1; i <= breakInt; i++) {
    let result;
    if (i % firstPrime === 0) {
        result = "Fizz";
    } else if (i % secondPrime === 0) {
        result = "Buzz";
    } else if (i % (firstPrime * secondPrime) == 0) {
        result = "FizzBuzz";
    } else {
        result = i;;
    }

    let resultDiv = document.createElement("div");
    resultDiv.innerHTML = result;

    log_view.append(resultDiv);

}
