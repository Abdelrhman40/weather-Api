
let locationName ={};
let forcaste =[];
let indexOfMonth ='';
let indexOfDay ='';
let date='';
let Days =["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let Month =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

async function getWheather(country="London") {
    if (country.length<=1) {
        let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=392d2a8fc1ba40fa811152327221703&q=london&days=3`)
        let data = await response.json();

        locationName =await data.location.name;
        forcaste =await data.forecast.forecastday;
        display();
    }else{
        let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=392d2a8fc1ba40fa811152327221703&q=${country}&days=3`)
        let data = await response.json();
        locationName =await data.location.name;
        forcaste =await data.forecast.forecastday;
        display();
    }
    // console.log(locationName);
    // console.log(forcaste);
}

getWheather();

function searchForWheather(term) {

    getWheather(term);
    
}

function display() {
    //console.log(locationName);
    document.getElementById('location').innerHTML=locationName;

    
    let temp =``;
    forcaste.forEach(element => {
        indexOfMonth = new Date(element.date).getMonth()
        indexOfDay = new Date(element.date).getDay()
        date= new Date(element.date).getDate()

        temp+=`
        <div class="col-md-4 text-center">
                <div class="d-flex justify-content-between">
                <div>${ Days[indexOfDay]}</div>
                <div>${date} ${ Month[indexOfMonth]}</div>
                </div>
                
        
                <div id="box">
                    <img src="https:${element.day.condition.icon}">
                    <h1>${element.day.maxtemp_c}<sup>o</sup>c</h1>
                    <h3>${element.day.mintemp_c}<sup>o</sup>c</h3>
                    <p class="text-info">${element.day.condition.text}</p>
                </div>
        </div>
    
        `
    });
    document.getElementById("forcaste").innerHTML=temp;
}


$(document).ready(function () {
  $("#loading").fadeOut(2000)
})