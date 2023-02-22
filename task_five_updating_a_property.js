const myString = {
    string: "Programming with Treehouse is fun!",
    countWords: function(){
        const wordArray = this.string.split(' ');
        return wordArray.length;
    }
}

myString.characters = myString.string.length;





const numWords = myString['countWords']();
myString.characters = myString.string.length;

myString.string = "I love full stack JavaScript";

console.log(myString);