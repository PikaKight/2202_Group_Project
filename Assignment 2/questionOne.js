let jobListings = require('./jobs.json');
let timesContained = {};
let timesContainedKeys = Object.keys(timesContained);
function filterMod(jobListNum)
{
    let currentArrayOfJobs = jobListings[jobListNum].categories
    timesContainedKeys=Object.keys(timesContained);
     for(i=0;i<currentArrayOfJobs.length;i++)
     {  
        let element = currentArrayOfJobs[i];
        if(timesContainedKeys.includes(element))
       {
           timesContained[element]=timesContained[element]+1;
       }
       else
       {
           timesContained[element]=1;
       }
       
     }
}
let alljl= Object.keys(jobListings);
let f=0;
for(f=0;f<alljl.length;f++)
{
     filterMod(alljl[f]);
}
let maxcat;
let maxcatCount =0;
let timesContainedcompleteKeys =Object.keys(timesContained);
for(s=0;s<timesContainedcompleteKeys.length;s++)
{
    let current = timesContainedcompleteKeys[s];
    if(timesContained[current]>maxcatCount)
    {
        maxcat = current;
        maxcatCount=timesContained[current];
    }
}
console.log("The highest catagory is: "+ maxcat);
console.log("With a count of: " + maxcatCount);
