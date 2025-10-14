const apikey='4463216da4224c8387d144501241610'
// const queryurl='http://api.weatherapi.com/v1/current.json?key=4463216da4224c8387d144501241610&q=Bristol&aqi=no'
const City='Bath'
const queryurl='http://api.weatherapi.com/v1/current.json'+
                '?'+'key='+apikey+
                '&'+'q='+City+
                '&'+'aqi='+'no'

                let counter=0;
                let countInterval;
                
                
function getData() {
    countInterval=setInterval(()=>console.log(counter++/10),100);
    fetch(queryurl)
        .then(jdata=>jdata.json())
        .then(data=>{
            clearInterval(countInterval);
            console.log(data)
        })
    .catch(error => console.log('Error while fetching:', error))
}




