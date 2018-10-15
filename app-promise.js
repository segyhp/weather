const yargs = require('yargs');
const axios = require ('axios');



const API_KEY_OPENWEATHER = 'ba49b8159b84217d7b203c0007372b74'

 
const argv = yargs.options({
    l : {
        demand: false,
        alias : 'location',
        describe : 'City name to fetch data for',
        string: true 
    }
})
.help()
.alias('help', 'h')
.argv; 

if(!argv.location){
    var encodedLocation = encodeURIComponent('Bogor');
}
else {
var encodedLocation = encodeURIComponent(argv.location);

}
var geocodeURL = `http://api.openweathermap.org/data/2.5/weather?q=${encodedLocation}&appid=${API_KEY_OPENWEATHER}`;


axios.get(geocodeURL).then((response) => {
    // console.log(response.data.name)

    let latitude = response.data.coord.lat
    let longitude = response.data.coord.lon
    
    weatherURL = `https://api.darksky.net/forecast/88446d6e8d0dc48cf495a35e25d3c081/${latitude},${longitude}`;
    return axios.get(weatherURL)
}).then((response => {
    console.log(response.data)

    let temperature = response.data.currently.temperature
    let apparentTemperature = response.data.currently.apparentTemperature;

    console.log(`It currently ${temperature}. It feels like ${apparentTemperature}.`)

})).catch((e) => {
    if(e.code === 'ENOTFOUND'){
        console.log("Unable to connect to API server.")
    }
    else if(e.response.data.cod === '404') {
    console.log("Error: " + e.response.data.message)
    }
    // console.log(Object.keys(e.response));
    // console.log(e.response.data.cod)
    
})