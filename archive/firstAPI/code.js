const latlong = document.getElementById("location");
const suntimes = document.getElementById("suntimes");

const myPosition={
    isActive:false,
    lat:0,
    long:0
}


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    latlong.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function success(position) {
    console.log(position)
    myPosition.isActive=true
    myPosition.lat=position.coords.latitude
    myPosition.long=position.coords.longitude
  latlong.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function error() {
  alert("Sorry, no position available.");
}

function getSunTimes(){
    let urlBase="https://api.sunrise-sunset.org/json?"
    let query=urlBase+"lat="+myPosition.lat+"&lng="+myPosition.long
    fetch(query)
        .then(jdata=>jdata.json())
        .then(processSunTimes)
}

function processSunTimes(sunData){
  console.log(sunData)
    suntimes.innerHTML = "sunrise: " + sunData.results.sunrise +
  "<br>sunset: " + sunData.results.sunset
}

