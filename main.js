let userScore = 0
let compScore = 0
const userScore_span = document.getElementById("user-score")
const compScore_span = document.getElementById("comp-score")
const reset_button = document.getElementById("reset")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")
let userText = "user".fontsize(5).sub()
let compText = "comp".fontsize(5).sub()

function main() {

    rock_div.addEventListener("click", _ => {
        game("r")
    })

    paper_div.addEventListener("click", _ => {
        game("p")
    })

    scissors_div.addEventListener("click", _ => {
        game("s")
    })

    reset_button.addEventListener("click", _ => {
        reset()
    })
}

function game(userChoice) {
    let computerChoice = getComputerChoice()

    if (userChoice === computerChoice) {
        draw(userChoice)
        return
    }

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break;

        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break;
    }
}

function getComputerChoice() {
    const choices = ["r", "p", "s"]
    return choices[Math.floor(Math.random() * 3)]
}

function win(userChoice, computerChoice) {
    userScore++
    userScore_span.innerHTML = userScore
    result_p.innerHTML = `You Chose : ${letterToWord(userChoice)} <br> Computer Chose : ${letterToWord(computerChoice)}<br> You win!`

    let div = document.getElementById(userChoice)
    div.classList.add("green-glow")
    setTimeout(_ => {
        div.classList.remove("green-glow")
    }, 300)

}

function lose(userChoice, computerChoice) {
    compScore++
    compScore_span.innerHTML = compScore
    result_p.innerHTML = `You Chose : ${letterToWord(userChoice)} <br> Computer Chose : ${letterToWord(computerChoice)}<br> You lose...`

    let div = document.getElementById(userChoice)
    div.classList.add("red-glow")
    setTimeout(_ => {
        div.classList.remove("red-glow")
    }, 300)
}

function draw(choice) {
    result_p.innerHTML = `You Chose : ${letterToWord(choice)} <br> Computer Chose : ${letterToWord(choice)}<br> Draw`

    let div = document.getElementById(choice)
    div.classList.add("gray-glow")
    setTimeout(_ => {
        div.classList.remove("gray-glow")
    }, 300)
}

function letterToWord(letter) {
    switch (letter) {
        case "r":
            return "Rock"
        case "p":
            return "Paper"
        case "s":
            return "Scissors"
    }
}

function reset() {
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML = 0;
    compScore_span.innerHTML = 0;

    result_p.innerHTML = "Select one to start playing"
}

main()