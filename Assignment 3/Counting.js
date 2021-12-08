const { count } = require("console");

function counting(reading){
    const words = require("./words.json")
    let [synonyms, related, near_antonyms, antonyms] = [0,0,0,0]; 
    reading.forEach(element => {
        if (element in words.Synonyms){
            synonyms += 1;
        }
        else if (element in words.Related){
            related +=1;
        }
        else if (element in words["Near Antonyms"]){
            near_antonyms += 1;
        }
        else if (element in words.Antonyms){
            antonyms += 1;
        }
    });

    return [synonyms, related, near_antonyms, antonyms];
}

module.exports = counting;

if (require.main === module) {
    const fs = require('fs');
    fs.readFile('Assignment 3/Optimism_and_your_health.txt', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        
      })
}