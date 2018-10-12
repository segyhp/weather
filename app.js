const yargs = require('yargs');

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather');

const argv = yargs.options({
    l : {
        demand: true,
        alias : 'location',
        describe : 'City name to fetch data for',
        string: true 
    }
})
.help()
.alias('help', 'h')
.argv; 




console.time('geocode')
geocode.geoCodeAddress(argv.location, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage)
     }
    else {
    console.log(JSON.stringify(results.location))
      const obj = {
          latitude: results.latitude,
          longitude: results.longitude
      }
      
      console.time('weather')

        weather.getWeather(obj, (errorMessage, weatherResults) => {
            if (!errorMessage) {
                // console.log(JSON.stringify(weatherResults, undefined, 2))
                console.log(`It's currenlty ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`)
            } else {
                console.log(errorMessage)
            }
        });
        console.timeEnd('weather')


    }
}) 
console.timeEnd('geocode')
// console.time('weather')


// weather.getWeather(obj, (errorMessage, results)=> {
//     if(!errorMessage){
//         console.log(JSON.stringify(results, undefined, 2))
//     }
//     else {
//         console.log(errorMessage)
//     }
// });
// console.timeEnd('weather')

