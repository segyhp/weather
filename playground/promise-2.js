const request = require('request')
const yargs = require('yargs');
const API_KEY = 'ba49b8159b84217d7b203c0007372b74'


const argv = yargs.options({
    l : {
        demand :true,
        string : true,
        alias : 'location',
        describe : 'Location of fetched data'
    }
})
.help()
.alias('help', 'h')
.argv; 

var geocodeAddress = (loc) => {

    var encodedLocation = encodeURIComponent(loc)
    return new Promise((resolve, reject) => {
        request({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${encodedLocation}&appid=${API_KEY}`,
        json : true
        },(error, body, response) => {
            
            // if(!error && response.statusCode === 200) {
            if (!error && body.statusCode === 200) {
                resolve(body.body)
            }
            else{
                reject("Unable fetch the location data.")
            }
        })
    })

}; 


geocodeAddress(argv.l).then((location)=> {
    console.log(JSON.stringify(location, undefined, 2))
}, (error) => {
    console.log(error)
})

