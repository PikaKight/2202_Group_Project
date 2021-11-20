const jobs = require('../Assignment 2/jobs.json');

function categoryCount(categoriesList, jobs, i){
    const categories = jobs[i]["categories"];
    categories.forEach( function (cat){
        if (cat in categoriesList){
            categoriesList[cat] += 1;
            return;
        }
        
        categoriesList[cat] = 1;
    });
}

function findFirstMax(city){
    var max = Object.keys(city)[0];
    for (key in city){
        if (city[max] < city[key]){
            max = key;
        }       
    }

    return max;
}

let cities = {};

for (i in jobs){
    let categoriesList = {};
    let temp = jobs[i]["title"].split(/[()]/);
    let city = temp[temp.length-2];
    if (city.includes("remote" )){
        continue;
    }

    if (city in cities){
        categoriesList = cities[city];
        categoryCount(categoriesList, jobs, i);
        cities[city] = categoriesList;
        continue;
    }
    
    categoryCount(categoriesList, jobs, i);
    cities[city] = categoriesList;
}


for (city in cities){
    console.log("Most popular category in %s is : %s", city, findFirstMax(cities[city]));
}

