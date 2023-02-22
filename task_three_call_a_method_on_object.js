// After the object literal, create a variable called numWords and set it the return
// value from the countWords() method using either dot or bracket notation.


const myString = {
    string: "Programming with Treehouse is fun!",
    countWords: function(){
        const wordArray = this.string.split(' ');
        return wordArray.length;
    },
}

const numWords = myString.countWords();