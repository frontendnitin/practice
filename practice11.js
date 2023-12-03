// let num = prompt("ENter your no.")
// num = Number.parseInt(num)

// if(num>4){
//     location.href ="https://google.com" 
// }



// let chances = 0;

// while(chances!==10){
//     let user_choice = prompt("Enter your choice between s , g , w")
//     var values = ["s" , "g", "w"];
//     let compt_guess = values[Math.floor(Math.random()*values.length)];

//     if(compt_guess=="s" && user_choice=="g"){
//         alert("User wins")
//     }
//     else if(compt_guess=="g" && user_choice=="s"){
//         alert("computer wins")
//     }
//     else if(compt_guess=="w" && user_choice=="s"){
//         alert("user wins")
//     }
//     else if(compt_guess=="s" && user_choice=="w"){
//         alert("computer wins")
//     }
//     else if(compt_guess=="w" && user_choice=="g"){
//         alert("computer wins")
//     }
//     else if(compt_guess=="g" && user_choice=="w"){
//         alert("User wins")
//     }
//     chances++;
//     }
//     if(chances==10){
//         alert("Game over")
//     }

// console.log("total no. of chances are" , `$user`)


let userScore = 0;
let computerScore = 0;
let chances = 0;

while (chances <=10) {
    const computerChoice = ['snake', 'water', 'gun'][Math.floor(Math.random() * 3)];

    const userChoice = prompt("Enter Your Choice : snake , water or gun");
    
   
    let result = '';

    if (userChoice === computerChoice) {
        result = 'Its a tie!';
    } 
    else if (
        (userChoice === 'snake' && computerChoice === 'water') ||
        (userChoice === 'water' && computerChoice === 'gun') ||
        (userChoice === 'gun' && computerChoice === 'snake')
    ) {
        result = 'You win!';
        userScore++;
    } 
    else {
        result = 'You lose!';
        computerScore++;
    }

    if (!['snake', 'water', 'gun'].includes(userChoice)) {
        alert('Invalid choice. Please choose snake, water, or gun.');
        continue;
    }
    
    alert(`${result}`)
    chances++;  
    
}

let winner = '';
if (userScore > computerScore) {
    winner = 'You';
} else if (userScore < computerScore) {
    winner = 'Computer';
} else {
    winner = 'Its a tie';
}

alert(`Game Over! Final Score:\nYou: ${userScore}\nComputer: ${computerScore}\n${winner} wins!`);
