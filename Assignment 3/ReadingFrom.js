const counting = require("./Counting");
const words = require("./words.json")

const fs = require('fs');
let readingPromise = fs.promises.readFile('./Assignment 3/Optimism_and_your_health.txt');
readingPromise.then(function(result) {
    // result is a buffer object
    let reToString = result.toString('utf-8');

    //you can remove this whenever you want

    let fileArray = reToString.split(/\s+/g);

    //add call to counter function or the actual function here
    let countedArray = counting(fileArray, words);

    for (i = 0; i < countedArray.length; i++) {

        let content = `${Object.keys(words)[i]}: ${countedArray[i]}\n`;
        fs.appendFile('Assignment 3/result.txt', content, err => {
            if (err) {
                console.error(err)
                return
            }
            //done!
        })
    }

}).catch(function(error) {
    console.log(error);
})