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
const answerMyQuestion = (userName, userQuestion)  => ({
    
    eightBall: 'It is certain', eightBall: 'It is decidedly so', eightBall: 'Reply hazy try again', eightBall: 'Cannot predict now', eightBall: 'Do not count on it', eightBall: 'My sources say no', eightBall: 'Outlook not so good', eightBall: 'Signs point to yes' 
} [userName] || [userQuestion]);

answerMyQuestion('Jane', 'Am i good at nitrotype?');


/*4) A function named raceTime with a parameter named userAge and a second parameter registeredEarly.
This function should return the time the users will start the race.*/

const raceTime = (userAge, registeredEarly) => {
   
    
    if(userAge > 18 && registeredEarly === true) {
        console.log(`${raceNumber} You race will start at 9:30 am.`);
    } else if (ageRunner > 18 && runnerRegistered === false) {
        console.log(`${raceNumber} Your race will start at 11:00 am!`);
    } else if (ageRunner < 18 && runnerRegistered === false) {
        console.log(`${raceNumber} Youth registrants run at 12:30 pm ! `);
    } else if (ageRunner === 18 && runnerRegistered === true) {
        console.log(`${raceNumber} You will race with youth registrants at 12:30`);
    }
    
}