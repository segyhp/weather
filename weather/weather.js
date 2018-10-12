const request = require('request')


 
 
var getWeather = (obj, callback) => {

    const {
        latitude,
        longitude
    } = obj;


request({ 
        url: `https://api.darksky.net/forecast/88446d6e8d0dc48cf495a35e25d3c081/${latitude},${longitude}`,
        json: true
    },
    (error, response, body) => {

        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature : body.currently.temperature,
                apparentTemperature : body.currently.apparentTemperature
            })
        } else {
            callback("Unable to fetch weather.")
        }

        // if(error){
        //     console.log("Unable to connect to Dark Sky API services.")
        // }
        // else if(response.statusCode === 404){
        //     console.log("Unable to fetch weather")
        // }
        // else if(response.statusCode === 403){
        //     console.log("Wrong API key")
        // }
        // else if(body.code === 400){
        //     console.log("Error: " + body.error)
        // }
        // else if(response.statusCode === 200){
        // }
        // console.log(JSON.stringify(body, undefined, 5))
    }
)
}



module.exports.getWeather = getWeather;