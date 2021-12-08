const fs = require('fs');
let readingPromise =fs.promises.readFile('./Optimism_and_your_health.txt',);
readingPromise.then(function(result)
{
    // result is a buffer object
    let reToString =result.toString('utf-8');

    //you can remove this whenever you want
    console.log(reToString);

    //add call to reading function or the actual function here
    
}).catch(function(error)
{
    console.log(error);
})