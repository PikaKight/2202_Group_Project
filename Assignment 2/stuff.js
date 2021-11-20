//populating the list of cities and their respective categories:
for (uniques of uniqueCityArr){//for each city//uniqueCityArr holds one instance of each city
    for (cit in jobs){
        //put here the same techniques for population array as Q2
        //here, city represents the string value of the city, and uniques is the unique city instance from the uniqueCityArr
        if (uniques == city) {//check if the city matches
            sameCities.push(cit);//pushes the object's reference ID into the array
        }
    }
    
    for (cat of sameCities) {
        let category = jobs[cat].categories;
        allCatsOfSameCity.push(...category);//pushes all the categories for that specefic city
    }

    let uniqueCityObj = Object.create(cityObj);//object that holds the data just collected on the specified city
//cityObj was defined outside of this loop to have two properties: city (a string), and categories (an array)
    uniqueCityObj.city = uniques;
    uniqueCityObj.categories = allCatsOfSameCity;
    arrCityObjects.push(uniqueCityObj);//pushes the object into this array of objects for later use
    sameCities = [];
    allCatsOfSameCity = [];//clearing the arrays to be reused for the next city
}

//printing stuff:
for (e of arrCityObjects){//for each city, find the most popular category and its frequency
    mostPopInEachCity = maxOccur(e.categories);//using a function you created to check the most frequently-occuring item from that list
    console.log(e.city.slice(1, e.city.length - 1) + " has '" + mostPopInEachCity[0] + "' as the most popular category among job postings in that city, having " + mostPopInEachCity[1] + " available job(s).")//printing out the info
}