//inchTofeet.js
// const myInches = 12;
// const myFeet = myInches / 12;
// console.log('my feet',myFeet);

// const dadaInch = 144;
// const dadaFeet = dadaInch / 12;
// console.log('dada feet',dadaFeet);


// const dadiInch = 84;
// const dadiFeet = dadiInch / 12;
// console.log('dadi feet',dadiFeet);


function inchToFeet(inches){

    const feet = inches / 12;
    return feet;
}
const dadaInches = 144;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);


const nanInches = 120;
const naniFeet = inchToFeet(nanInches);
console.log(naniFeet);