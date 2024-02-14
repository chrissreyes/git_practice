// Rock, paper and Scissors game in JS language

const getUserChoice = (userInput) => { // Declaring a function to get the user choice
    userInput = userInput.toLowerCase(); // Making sure the input is lower case
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') { //valid inputs
        return userInput;
    } else {
        console.log('User input is invalid'); // error message for invalid input
        return null;
    }
}
// console.log(getUserChoice('test')); // Test #1

// Declaring function for computer choice
const getComputerChoice = () => {
    const rand = Math.floor(Math.random() * 3); // Generate random number between 0 and 2 and saves to rand
    switch (rand) { // Switch to determine what value receives every number
        case 0:
            return 'rock'; // if random number equals 0 then result will be rock
            break;
        case 1:
            return 'paper'; // if random number equals 1 then result will be paper
            break;
        case 2:
            return 'scissors'; // if random number equals 2 then result will be scissors
            break;
    }
}
// console.log(getComputerChoice()); // Test #2

// determine Winner based on inputs
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) { // Conditionals for each input using IF...else
        return 'The game is a Tie';
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'Computer has won';
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'User has won';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'Computer has won';
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'User has won';
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'Computer has won';
    }
}
const playGame = () => {
    rl.question('Type in rock, paper or scissors: ', (userChoice) => { // asking user for input
    userChoice = getUserChoice(userChoice); // saving user choice
    const computerChoice = getComputerChoice(); // creating variable computerChoice to store rand answer
    console.log('User choice was: ', userChoice);
    console.log('Computer choice was: ', computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
    rl.close(); // closing question interface
});
}

const readline = require('readline'); //variable creation to ask for username

const rl = readline.createInterface({ // interface for question
  input: process.stdin, // commands use for input and output on question interface
  output: process.stdout
});


playGame(); // run game