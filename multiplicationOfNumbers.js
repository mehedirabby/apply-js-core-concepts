//1*2*3*4*5*6*7
// factorial
// function multiplicationOfNumbers(numbers){
//     let result = 1;
//     for(let i = 1; i <=numbers;i++){
//         result = result * i;
//     }
//     return result;
// }
// const result = multiplicationOfNumbers(9);
// console.log(result);





function multiplicationOfNumbers(numbers){
    let result = 1;
    for (let i = 1; i <=numbers;i++){
        result = result * i;
    }
    return result;
}
const result = multiplicationOfNumbers(5);
console.log(result);