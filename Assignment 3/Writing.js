const wordCount = require("./ReadingFrom");

const fs = require('fs')

fs.writeFile('./result.txt', content, err => {
    if (err) {
        console.error(err)
        return
    }
    //file written successfully

})