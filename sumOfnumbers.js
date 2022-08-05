//sumOfnumbers.js
function sumOfnumbers(numbers){
    let sum = 0;
for(i=0;i<=numbers;i++){
    sum = sum + i;
    //console.log(i,sum);
}
return sum;
}
const result = sumOfnumbers(7);
console.log(result);
