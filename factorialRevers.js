//factorialRevers.js
function factorial(numbers){
    let result = 1;

    for(let i = numbers; i >=1;i--){
        result = result * i;
        console.log(i);
    }
    return result;
}
const number = 7;
const fact = factorial(number);
console.log('factorial of',number, fact);