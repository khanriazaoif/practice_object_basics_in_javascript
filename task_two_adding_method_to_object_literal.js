// Add a method to the object literal called countWords().
// countWords() should return the number of individual words in the string property.

const myString = {
    string: "Programming with Treehouse is fun!",
    countWords: function() {
            const wordArray = this.string.split(' ');
            return wordArray.length;
        }
}

console.log(myString.string.split(' '));