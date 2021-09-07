/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase{
   constructor(phrase){
      this.phrase = phrase.toLowerCase();
   }
/**
* Display phrase on game board
*/
    addPhraseToDisplay(){
    for(let i = 0; i < this.phrase.length; i++) {
            const Li = document.createElement('li');
            Li.textContent = this.phrase[i];
            if(this.phrase[i] !==' '){
                Li.className = `hide letter`;
            } else {
                Li.className = 'space';
            }
            document.querySelector('#phrase ul').appendChild(Li);
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
        document.querySelectorAll(".letter").forEach((character) => {
         if (character.textContent === letter) {
           character.classList.replace("hide", "show");
            }
        });
    };
};