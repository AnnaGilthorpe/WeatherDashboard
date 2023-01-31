//Day 1 date
let today = moment();
let dayWeek = today.format("L")
$("#currentDay").text(dayWeek);
console.log(dayWeek);

//Day2 date
let tomorrow = moment().add(1, 'days');
console.log(tomorrow.format("L"));
$("#tomorrow").text(tomorrow.format("L"));

//Day 3 date
let dayThree = moment().add(2, 'days');
console.log(tomorrow.format('L'));
$("#dayThree").text(dayThree.format("L"));

//Day 4 date
let dayFour = moment().add(3, 'days');
console.log(tomorrow.format('L'));
$("#dayFour").text(dayFour.format("L"));

//Day 5 date
let dayFive = moment().add(3, 'days');
console.log(tomorrow.format('L'));
$("#dayFive").text(dayFive.format("L"));

//Event listener
//On click that sets items - current time and value that is entered into the text area
//getCity

//Event listener to track what data is inputted to search bar
let searchInput = document.querySelector("#search-data")

//searchInput.addEventListener("input",e => {
//    const value = e.target.value
 //   console.log(value) })

//On click event listener that when search button is clicked
// the searchInput is added to the API query
// 
// let searchButton = document.getElementById("#search-button");

// searchButton.addEventListener("click", getCity() {
//     let value = d
// }

    // let searchButton = document.getElementById("#search-button");
    // searchButton.addEventListener("click", getCity() {
    // let searchButtonVal = 
    //     let value = $(this).siblings('.work-description').val()
    //     let time = $(this).parent().attr('id')

    //     localStorage.setItem(time, JSON.stringify(value))
    // })})

    var srchBtn = document.querySelector("#search-button");

    srchBtn.addEventListener('click', function(event) {

        event.preventDefault();
        var srchInput = document.querySelector("#search-input").value;  
        x (srchInput)
        
    })
    
    
    function x (srchInput) {
        fetch (`http://api.openweathermap.org/geo/1.0/direct?q=${srchInput}&limit=5&appid=4ff9b6d7f7d6a25b5cc77d6e320e6ea5`)
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
            var x = document.querySelector("#li");
            x.textContent = `City Name: ${data.city.name}`;
            // localStorage.setItem("City Name", )
        })
    }

    
