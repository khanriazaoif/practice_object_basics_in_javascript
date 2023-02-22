// After the object literal, create a new property (using dot OR bracket notation) called characters.
//     This property should be set to the number of characters in the phrase held in the string property.



const myString = {
    string: "Programming with Treehouse is fun!",
    countWords: function(){
        const wordArray = this.string.split(' ');
        return wordArray.length;
    }
}


const numWords = myString.countWords();
myString.characters = myString.string.length;

console.log(myString.characters);