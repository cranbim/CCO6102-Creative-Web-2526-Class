const latlong = document.getElementById("location");
const sunTimes = document.getElementById("suntimes")

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
  let queryURL=urlBase+"lat="+myPosition.lat+"&lng="+
    myPosition.long
  let queryURL2=`${urlBase}lat=${myPosition.lat}&lng=${myPosition.long}`
  fetch(queryURL)
    .then(data=>data.json())
    .then(processSunTimes)

}

function processSunTimes(sunData){
  sunTimes.innerHTML="sunrise:"+sunData.results.sunrise+
    "<br>sunset: "+sunData.results.sunset
}

let rabbitData

function getRabbits(){
  fetch('rabbits.json')
    .then(data=>data.json())
    .then(rData=>{
      rabbitData=rData
      console.log(rData)
    }
  )
      
}

