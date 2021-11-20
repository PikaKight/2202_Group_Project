jobs = require('./jobs.json');

regex = /\(([^)]*)\)[^(]*$/;
allCities = [];

for (info in jobs) {
    data = jobs[info];
    title = (data["title"]); 
    if (title.indexOf("allows remote") != 0) { //check if there is string in title tag of json file that contains 'allows remote'
        title = title.replace("allows remote", ""); 
        if (title.indexOf("()") != 0) { //check if contains '()'
            title = title.replace("()", "");
        }
    }
    city = title.match(regex)[1];
    allCities.push(city); //contains all cities with duplicates
}

uniqueCities = ["tempCity"]; 
function filterCity(compareCity) { //filters allCities to get list of cities with no duplicates
    value = true;
    for (k = 0; k < uniqueCities.length; k++) {
        if (compareCity === uniqueCities[k]) { //check if city that is being compared is same as any of the ones that have already been checked
            value = false;
        }
    }
    if (value) {
        uniqueCities.push(compareCity); 
    }
}

function filterNumber(compareCity) { //contains number of job listings for each city
    count = 0;
    allCities.forEach(c => { 
        if (c === compareCity) {
            count++;
        }
    })
    return count;
}

resultsCity = [];
resultsNumber = [];
for (i = 0; i < allCities.length; i++) { 
    resultsCity.push(filterCity(allCities[i])); //call function filterCity to get all cities with no duplicates
}

for (i = 0; i < uniqueCities.length; i++) {
    resultsNumber.push(filterNumber(uniqueCities[i])); //call function filterNumber by passing array of non-duplicate cities to avoid re-checking
}

largestNum = resultsNumber[0];
largestCity = uniqueCities[0];

for (i = 0; i < resultsNumber.length; i++) {
    if (resultsNumber[i] > largestNum) {
        largestNum = resultsNumber[i];
        largestCity = uniqueCities[i]; //set largest city to same index as largest num 
    }
}

console.log("City with most job postings: " + largestCity + "\nNumber of job postings: " + largestNum);
