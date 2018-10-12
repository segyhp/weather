// const yargs = require('yargs');
// const geocode = require('./geocode/geocode')
// const argv = yargs.options({
//     l : {
//         demand: true,
//         alias : 'location',
//         describe : 'City name to fetch data for',
//         string: true 
//     }
// })

// .help()
// .alias('help', 'h')
// .argv; 

// geocode.geoCodeAddress(argv.location, (errorMessage, results) => {
//     if(errorMessage){
//         console.log(errorMessage)
//     }
//     else {
//         console.log(JSON.stringify(results, undefined, 2))
//     }
// })


// geocode.geoCodeAddress(argv.location)

//https: //api.darksky.net/forecast/88446d6e8d0dc48cf495a35e25d3c081/-6.6,-106.8

const request = require('request')

request({
    url: 'https://api.darksky.net/forecast/88446d6e8d0dc48cf495a35e25d3c081/' + '-6.6,-106.8',
    json :true
},
(error, response, body) => {

    if(!error && response.statusCode === 200){
        console.log(`Temperature : ${body.currently.temperature}`)
    }
    else {
        console.log("Unable to fetch weather.")
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