// selecting DOM elements
const display = document.querySelector('#display');
const check = document.querySelector('.check');
const reset = document.querySelector('.again');
let guess = document.querySelector('.guess');
let number = document.querySelector('.number');
let trials = document.querySelector('.trials');
const warning = document.querySelector('.warning');
const msg = document.querySelector('.message');
const body = document.querySelector('body');
const soft = document.querySelector('.soft')
const love = document.querySelector('.love')
const passionfruit = document.querySelector('.passionfruit')
let labelscore = document.querySelector(".label-score")
let labelhighscore = document.querySelector(".label-highscore")


// Creating sounds to play
const winSound = new Audio('../mixkit-retro-game-notification-212.wav')
const loseSound = new Audio('../mixkit-sad-game-over-trombone-471.wav')
const gameOver = new Audio('../mixkit-retro-game-notification-212.wav')

// Function to play sound
const playwinSound = function(){
    winSound.play()
}
const playloseSound = function(){
    loseSound.play()
}
const playgameOverSound = function(){
    gameOver.play()
}

// Creating images to show
const showWinImage = new Image('../giphy.gif')


// Function to add image after win
const winImage = ()=>{

}


const playGame = function(){
    let randomNum = Math.ceil(Math.random() * 5);
// console.log(randomNum);

// For trials
    trials.innerHTML--;
    (trials.innerHTML < 0) ? trials.innerHTML = 0 : trials.innerHTML

if (guess.value == null || guess.value < 1 || guess.value > 5 || guess.value == ""){
    playloseSound()
    warning.style.display = "block";
    warning.innerHTML = "please enter a number between 1-5";
    setTimeout(()=> warning.style.display = "none", 3000);
    guess.value = "";
}else if(guess.value == randomNum){
    playwinSound()
    display.innerHTML = "Correct!!!";
    display.style.color = "green";
    number.innerHTML = randomNum;
    body.classList.remove("fail")
    body.classList.remove("body")
    body.classList.add("correct")
    soft.innerHTML = "You win"
    msg.style.color = "orange"
    labelscore.style.color = "orange"
    labelhighscore.style.color = "orange"
    setTimeout(()=>soft.innerHTML = "", 5000)
}else if(trials.innerHTML == 0){
    playgameOverSound()
    display.innerHTML = "Game Over!!!";
    body.classList.remove("fail")
    body.classList.remove("correct")
    body.classList.add("body");
    guess.value = "";
    number.innerHTML = "?";
    check.setAttribute("disabled", "true");
    msg.innerHTML = "Play again!!";
    love.innerHTML = "You lose";
    setTimeout(()=>love.innerHTML = "", 5000);

}else{
    playloseSound()
    body.classList.remove("body")
    body.classList.remove("correct")
    body.classList.add("fail")
    display.innerHTML = "Opps you're wrong!"
    msg.innerHTML = "Continue playing"
}
}

// playGames()
check.addEventListener('click', playGame);
reset.addEventListener('click', handleReset);
console.log(window);

// Reset function
function handleReset(){
    window.location.reload()
}