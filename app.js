const request = require('request');
const yargs = require('yargs');

const API_KEY = 'ba49b8159b84217d7b203c0007372b74'
const argv = yargs.options({
    a : {
        demand: true,
        alias : 'city',
        describe : 'City name to fetch data for',
        string: true 
    }
})

.help()
.alias('help', 'h')
.argv; 

// console.log(argv)

var encodedCity = encodeURIComponent(argv.city)






request({
    url: `http://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${API_KEY}`,
    // url: "https://maps. googleapis.com/maps/api/geocode/json?address=Gg.%20Gotong%20Royong%20No.4%20Cilendek%20Bar.%20Bogor%20Bar.%20Kota%20Bogor%20Jawa%20Barat%2016112",
    json : true
},(error, response, body)=> {
    // console.log(JSON.stringify(body, undefined, 5))
    if(error){
        console.log("Unable connect to API services")
    } else if(body.cod === "404"){
        console.log("Error : " ,body.message)
    }
     else if(body.cod === 200){
        console.log(`Location : ${body.name} `);
        console.log(`Weather : ${body.weather[0].main} - ${body.weather[0].description}  `);
        console.log(`Longitude : ${body.coord.lon} `);
        console.log(`Latitude : ${body.coord.lat} `);
    }
    // else {
   
    // }
  
} )