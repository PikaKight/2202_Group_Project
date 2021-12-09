function counting(reading){
    const words = require("./words.json")
    let [synonyms,related,near_antonyms,antonyms] = [0,0,0,0]; 
    for (i = 0; i < reading.length; i++){
        reading[i] = reading[i].replace("(", "").replace(")", "").replace("\"", "").replace(",","").replace(".","").replace(":","").replace("...", "").replace("?","").replace(";", "");
        if (reading[i] in words["Synonyms"]){
            synonyms += 1;
        }
        if (reading[i] in words["Related"]){
            related +=1;
        }
        if (reading[i] in words["Near Antonyms"]){
            near_antonyms += 1;
        }
        if (reading[i] in words["Antonyms"]){
            antonyms += 1;
        }
    }

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
        text = data.split(/\s+/g);
        console.log(counting(text))
      })
}