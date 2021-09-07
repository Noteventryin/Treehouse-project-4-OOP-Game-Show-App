/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
//using let instead of const.
let game;
const startbtn = document.getElementById('btn__reset');
startbtn.addEventListener('click',()=>{
    game = new Game;
    game.startGame();
});//call startGame() method when user click the start/reset button.

//add event listener to each keyboard buttons for 'click'.
const keyboard = document.getElementById("qwerty");
keyboard.addEventListener('click', (e) =>{
    if (e.target.tagName === 'BUTTON') {
    game.handleInteraction(e.target);
    }
})

