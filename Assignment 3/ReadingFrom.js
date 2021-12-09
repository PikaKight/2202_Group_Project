const counting = require("./Counting");
const fs = require('fs');
const counting = require("./Counting");
let readingPromise = fs.promises.readFile('./Assignment 3/Optimism_and_your_health.txt');
readingPromise.then(function(result) {
    // result is a buffer object
    let reToString = result.toString('utf-8');

    //you can remove this whenever you want

    let fileArray = reToString.split(/\s+/g);

    //add call to counter function or the actual function here
    let countedArray = counting(fileArray);

    // add call to write to file here

}).catch(function(error) {
    console.log(error);
})

module.exports = wordCount;