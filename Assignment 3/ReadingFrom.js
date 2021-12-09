const counting = require("./Counting");
const fs = require('fs');
fs.readFile('Assignment 3/Optimism_and_your_health.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    text = data.split(/\s+/g);
    let wordCount = counting(text);
})

module.exports = wordCount;