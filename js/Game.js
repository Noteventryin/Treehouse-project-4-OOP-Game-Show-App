/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
  constructor(){
      this.missed = 0;
      this.phrases = this.createPhrases();
      this.activePhrase = null;
  }

/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/

    createPhrases(){
        const phrases = [new Phrase('life is like a box of chocolates' ),
                         new Phrase('there is no trying'),
                         new Phrase('may the force be with you'),
                         new Phrase('you have to see the matrix for yourself'),
                         new Phrase('you talking to me')];
        return phrases;
    };
/**
* Begins game by selecting a random phrase and displaying it to user
* calls the `getRandomPhrase()` method and `addPhraseToDisplay()` method.
*/
    startGame(){
    this.missed = 0;
    const startgame = document.getElementById('overlay');
    startgame.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
    };    
    /**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/    
    getRandomPhrase(){
        let randomphrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomphrase;
    };
    
/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
    handleInteraction(e) {
        e.disabled = true;
        if (this.activePhrase.checkLetter(e.textContent)){
            e.classList.add("chosen");
            this.activePhrase.showMatchedLetter(e.textContent)
            if(this.checkForWin()){
                this.gameOver(true);
            }
        }else{
            e.classList.add("wrong");
            this.removeLife();  
        }
    }; 
/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin() {
        return document.querySelectorAll('.hide').length === 0;
    };

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
    removeLife(){
        document.getElementsByClassName("tries")[this.missed].firstElementChild.src = "images/lostHeart.png";
        this.missed += 1;
        if(this.missed === 5){
            this.gameOver();
        }//if user chose 5 wrong letters , the gameOver() will be called.
    };
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(gameWon) {
       const overmsg = document.getElementById('game-over-message');
       const overlay = document.getElementById('overlay');
       overlay.style.display ='block';
       if(gameWon == true){
           overmsg.innerHTML ="Congratulations! You have won the game!" 
           overlay.className = 'win';
       }else {
           overmsg.innerHTML ="You have lost all hearts, better luck next time!" 
           overlay.className = 'lose';
       }
       this.resetGame();
       //call resetGame() method to reset.
    };

    resetGame(){
        this.missed = 0;
        const hearts = document.getElementsByClassName('tries');
        const phrase = document.getElementById('phrase');
        const key = document.querySelectorAll('.key');
        //Remove all `li` elements from the Phrase `ul` element.Set it to empty string.
        //Using .firstElementChild to make sure after reset the ('#phrase ul') won't be gone.
        phrase.firstElementChild.innerHTML = '';
        for (let i = 0; i < key.length; i++) {
			key[i].className = 'key';
			key[i].disabled = false;
		}
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].firstElementChild.src = 'images/liveHeart.png';
        }
        
    }

};
   