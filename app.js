let userscor = 0;
let comscor = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg")

const userScor = document.querySelector("#userscor")
const comScor = document.querySelector("#comscor")

const reset = document.querySelector(".reset")

const drawGame = (user) => {
    console.log("Game Draws")
    msg.innerText = `Game Draws! You both Choose ${user}`
    msg.classList.add("draw")
    msg.classList.remove("loose","win")
}
const showWinner = (userWin,user,com) => {
    if(userWin){
        userscor++;
        userScor.innerText = userscor;
        console.log("you win");
        msg.innerText = `You Win! Your ${user} beats ${com}`
        msg.classList.add("win")
        msg.classList.remove("draw","loose")
    }else{
        comscor++;
        comScor.innerText = comscor
        console.log("you lose");
        msg.innerText = `You Loose! ${com} beats your ${user}`
        msg.classList.add("loose")
        msg.classList.remove("draw","win")
    }
}

const genComChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame = (choiceId) => {
    console.log("users choice :",choiceId );
    const comChoice = genComChoice();
    console.log("computer choice is ",comChoice)
    
    if(choiceId === comChoice){
        drawGame(choiceId);
    } else {
        let userWin = true;
        if(choiceId === "rock"){
            userWin = comChoice === "paper" ? false : true;
        } else if (choiceId === "paper"){
            userWin = comChoice === "scissor" ? false : true;
        } else {
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin,choiceId,comChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    })
})
reset.addEventListener("click",() => {
    userscor = 0;
    userScor.innerText = 0;
    comscor = 0;
    comScor.innerText = 0;
})