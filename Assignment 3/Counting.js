const { count } = require("console");

function counting(reading){
    const words = require("./words.json")
    let synonyms  = 0; 
    let related = 0;
    let near_antonyms = 0;
    let antonyms = 0; 
    i = 0;
    for (element of reading){
        if (element in words["Synonyms"]){
            synonyms += 1;
        }
        else if (element in words["Related"]){
            related +=1;
        }
        else if (element in words["Near Antonyms"]){
            near_antonyms += 1;
        }
        else if (element in words["Antonyms"]){
            antonyms += 1;
        }
        i++
    }

    return synonyms, related, near_antonyms, antonyms, i, reading.length;    
}

module.exports = counting;

if (require.main === module) {
    const fs = require('fs');
    fs.readFile('Assignment 3/Optimism_and_your_health.txt', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        text = data.split(/\s+/g);
        console.log(text)
      })
}