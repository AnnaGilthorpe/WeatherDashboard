

fetch ("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=4ff9b6d7f7d6a25b5cc77d6e320e6ea5")
    .then(response => response.json())
    .then(citiesFound => {
        let firstCity = citiesFound[0];
        console.log(firstCity.lat);
        console.log(firstCity.lon);
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${firstCity.lat}&lon=${firstCity.lon}&appid=4ff9b6d7f7d6a25b5cc77d6e320e6ea5`)
    })


    .then(response => response.json())
    .then(data => {
        console.log(data);
    })