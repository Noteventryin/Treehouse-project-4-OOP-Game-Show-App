/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase{
   constructor(phrase){
      this.phrase = phrase.toLowerCase();
   }
//converted to all lower case.
/**
* Display phrase on game board
*/
    addPhraseToDisplay(){
        const ul = document.querySelector('#phrase ul');
        for(let i = 0; i < this.phrase.length; i++) {
            const Li = document.createElement('li');
            Li.textContent = this.phrase[i];
            if(this.phrase[i] !==' '){
                Li.className = `hide letter`;
            } else {
                Li.className = 'space';
            }
            ul.appendChild(Li);
    }
       
}
/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
    checkLetter(letter) {
        return this.phrase.includes(letter);
    };
/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
    showMatchedLetter(letter) {
        document.querySelectorAll(".letter").forEach((keyboard) => {
            if (keyboard.textContent === letter) {
            keyboard.classList.replace("hide", "show")
            }
        });
    };
};