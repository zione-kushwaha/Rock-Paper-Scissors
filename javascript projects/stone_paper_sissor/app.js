let user_score = document.querySelector('#users-score');
let computer_score = document.querySelector('#Computer-score');

let msg = document.querySelector('#msg');
const comp_choice = () => {
    let choice = ['rock', 'paper', 'scissor'];
    let index = Math.floor(Math.random() * 3);
    return choice[index];

}

const win = (userwin, userchoice, computer_choice) => {
    if (userwin) {
        msg.innerText = `You win ${userchoice} beats ${computer_choice}`;
        user_score.innerText = parseInt(user_score.innerText) + 1;
        msg.style.backgroundColor = 'green';
    } else {
        msg.innerText = `You losse ${computer_choice} beats ${userchoice}`;
        msg.style.backgroundColor = 'red';
        computer_score.innerText = parseInt(computer_score.innerText) + 1;
    }
}
const playGame = (choice) => {
    let computer_choice = comp_choice();
    if (choice === computer_choice) {

        msg.innerText = 'Game drawn! Play again!!';
        msg.style.backgroundColor = 'black';
    } else {
        let user_win = true;

        if (choice === 'rock') {
            //paper, scissor
            user_win = computer_choice === 'paper' ? false : true;
        } else if (choice === 'paper') {
            user_win = computer_choice === 'scissor' ? false : true;
        } else {
            //rock,paper
            user_win = computer_choice === 'rock' ? false : true;
        }
        win(user_win, choice, computer_choice);
    }
}

const choices = document.querySelectorAll('.choice');
choices.forEach((element) => {
    element.addEventListener('click', () => {
        const id = element.getAttribute('id');
        playGame(id);
    });
});