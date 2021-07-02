/*1) A function named kelvinToFahrenheit with a single parameter named kelvin.
This function should return the temperature value in fahrenheits degrees.*/

let celsius = kelvin - 273;

let kelvinToFahrenheit = (kelvin) =>  celsius *  (9/5) + 32;
kelvinToFahrenheit(293);

/*2) A function named humanAgeInDogYears with a single parameter named myAge.
This function should return the corresponding number of dog years.*/

/*let earlyYears = 2 * 10.5;
let laterYears = (myAge - 2) * 4; 
let humanAgeInDogYears = (myAge) => earlyYears + laterYears;
console.log(humanAgeInDogYears(25));*/

function humanAgeInDogYears(myAge) {
    let earlyYears = 2 * 10.5;
    let laterYears = (myAge - 2) * 4;
    return earlyYears + laterYears;
}
humanAgeInDogYears(25);


/*3) A function named answerMyQuestion with a parameter named userName and a second parameter userQuestion.
This function should return the corresponding eight ball answer.*/

const answerMyQuestion 