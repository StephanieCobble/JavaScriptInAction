"use strict";

// //Variables: 1 Days of the Week
// let dayOfWeek = "Monday";
// console.log(dayOfWeek);


// dayOfWeek = "Friday"
// console.log(`I can't wait for ${dayOfWeek}!`)

// //Variables: 2 User Input
// let animalInput = prompt(
//     "What is your favorite animal?"
//     );
// let colorInput = prompt(
//     "What is your favorite color?"
// );
// console.log(`I've never seen a ${colorInput} ${animalInput}!`)

// //Conditionals: 1 Meals
// //mealChoice = eggs, sandwich, crab
// let timeOfDay = 1300
// timeOfDay = 900
// timeOfDay = 1800
// timeOfDay = seven //breaks if something is given that's undefined
// let mealChoice;

// if(timeOfDay<1200) {
//     console.log('eggs');
// }
// else if(timeOfDay<1700) {
//     console.log('sandwich');
// }
// else {
//     console.log('crab');
// }

// //Conditionals: 2 Random Number
// let randomNumber = Math.floor(Math.random() * 11)
// if(randomNumber<=2) {
//     console.log("Beatles");
// }
// else if(randomNumber<=5) {
//     console.log("Stones");
// }
// else if(randomNumber<=8) {
//     console.log("Floyd");
// }
// else if(randomNumber<=10) {
//     console.log("Hendrix");
// }

//Loops
//For Loops 1-3
// for(let i = 0; i < 7; i++) {
//     console.log("JavaScript is cool!");
// }

// for(let i = 0; i < 11; i++) {
//     console.log(i);
// }

// for(let i = 0; i < 5; i++) {
//     console.log("hello");
//     console.log("goodbye");
// }

//While Loops

// while(isInstructorIsAwesome) {
//   //logic
// }

// //Functions: 1 Favorite Movie (void funtions)

// function printMovieName(movie) {
//     var favoriteMovie = movie;
//     return favoriteMovie;
// }
// let myFavoriteMovie = "deadpool";
// console.log(myFavoriteMovie);

// //Functions: 2 Favorite Band (return functions)
// function yourFaveBand() {
//     var favoriteMovie = prompt("Please enter your favorite band!");
//     console.log(favoriteMovie);
// }
// yourFaveBand();

// //Functions: 3 Concert (params)
// let musicalAct = prompt('Please enter your favorite band or artist.')
// function concertDisplay(musicalAct) {
//     let myStreet = prompt('Please enter what street you live on.');
//     //let musicalAct = prompt('Please enter your favorite band or artist.')
//     console.log(`It would be great it ${musicalAct} played a show on ${myStreet}!`);
// }
// concertDisplay(musicalAct);

// //Arrays

// function desktop() {
//     var desktopItems = ["pens", "pencils", "lamp"];
//     console.log(desktopItems[1]);
//     desktopItems.push('Infinity Gauntlet');
//     for(let i=0; i<desktopItems.length; i++){
//         console.log(desktopItems[i]);
//     }
// }
// desktop();


//Magic Number

// let magicNumber = 50;
// let guess = 0;

// while(guess != magicNumber) {
//     guess = prompt('Enter your best guess for the magic number!')
//     if(guess == magicNumber) {
//         alert(`${magicNumber} - Yes! You guessed correctly!!`) 
//     } else if(guess > magicNumber) {
//         console.log('Too high!')
//         if(guess <= magicNumber + 10) {
//             console.log('Getting Warmer!')
//         }
//     } else if(guess < magicNumber) {
//         console.log('Too low!')
//         if (guess >= magicNumber - 10) {
//             console.log('Getting Warmer!')
//         }
//     } else {
//         console.log('Invalid input! Try again.')
//     }
// }

let magicNumber = (Math.floor(Math.random()*100)); //reworked with random
let guess = 0;

while(guess != magicNumber) {
    guess = prompt('Enter your best guess for the magic number!')
    if(guess == magicNumber) {
        alert(`${magicNumber} - Yes! You guessed correctly!!`) 
    } else if(guess > magicNumber) {
        console.log('Too high!')
        if(guess <= magicNumber + 10) {
            console.log('Getting Warmer!')
        }
    } else if(guess < magicNumber) {
        console.log('Too low!')
        if (guess >= magicNumber - 10) {
            console.log('Getting Warmer!')
        }
    } else {
        console.log('Invalid input! Try again.')
    }
}


