const request = require('request');
const yargs = require('yargs');


const argv = yargs.options({
//     a : {
//         demand: true,
//         alias : 'address',
//         describe : 'Address to fetch data for',
//         string: true 
//     }
// })
    id_num : {
        demand: true,
        alias : 'id',
        describe : 'Id to fetch data for',
    }
})
.help()
.alias('help', 'h')
.argv; 

console.log(argv)

// var encodedAddress = encodeURIComponent(argv.address)
var encodedAddress = encodeURIComponent(argv.id_num)






request({
    url: `https://jsonplaceholder.typicode.com/todos/${encodedAddress}`,
    // url: "https://maps. googleapis.com/maps/api/geocode/json?address=Gg.%20Gotong%20Royong%20No.4%20Cilendek%20Bar.%20Bogor%20Bar.%20Kota%20Bogor%20Jawa%20Barat%2016112",
    json : true
},(error, response, body)=> {
    console.log(JSON.stringify(body, undefined, 5))

    // console.log(`Title : ${body.title} `)
} )