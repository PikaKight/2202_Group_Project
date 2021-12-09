function counting(reading) {
    const words = require("./words.json")
    let [synonyms, related, near_antonyms, antonyms] = [0, 0, 0, 0];
    for (i = 0; i < reading.length; i++) {
        reading[i] = reading[i].replace("(", "").replace(")", "").replace(".", "").replace("\"", "").replace(",", "").replace(":", "").replace("...", "").replace("?", "").replace(";", "").toLowerCase();


        if (words["Synonyms"].includes(reading[i])) {
            synonyms += 1;
            console.log(reading[i])
        }
        if (words["Related"].includes(reading[i])) {
            related += 1;
        }
        if (words["Near Antonyms"].includes(reading[i])) {
            near_antonyms += 1;
        }
        if (words["Antonyms"].includes(reading[i])) {
            antonyms += 1;
        }
    }

    return [synonyms, related, near_antonyms, antonyms];
}

module.exports = counting;

if (require.main === module) {
    const fs = require('fs');
    fs.readFile('Assignment 3/Optimism_and_your_health.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        text = data.split(/\s+/g);
        console.log(counting(text))
    })
}