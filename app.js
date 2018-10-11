const yargs = require('yargs');
const geocode = require('./geocode/geocode')
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

geocode.geoCodeAddress(argv.location, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage)
    }
    else {
        console.log(JSON.stringify(results, undefined, 2))
    }
})


// geocode.geoCodeAddress(argv.location)
