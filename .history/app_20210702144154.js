/*1) A function named kelvinToFahrenheit with a single parameter named kelvin.
This function should return the temperature value in fahrenheits degrees.*/

let celsius = kelvin - 273;

let kelvinToFahrenheit = (kelvin) => celsius * (9 / 5) + 32;
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

/*const answerMyQuestion = (userName, userQuestion) => {
    let = ''
    switch (eightBall) {
        case 0:
            eightBall = 'It is certain'
            break;
        case 1:
            eightBall = 'It is decidedly so'
            break;
        case 2:
            eightBall = 'Reply hazy try again'
            break;
        case 3:
            eightBall = 'Cannot predict now'
            break;
        case 4:
            eightBall = 'Do not count on it'
            break;
        case 5:
            eightBall = 'My sources say no'
            break;
        case 6:
            eightBall = 'Outlook not so good'
            break;
        case 7:
            eightBall = 'Signs point to yes'
            break;
    }
}
console.log(answerMyQuestion('Jane', 'Am i good at nitrotype?'));*/
function answerMyQuestion(eightBall) {
    let eightBall = {
        'It is certain',
        
    }
}
