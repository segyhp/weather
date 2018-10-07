const request = require('request')

request({
    url: "https://jsonplaceholder.typicode.com/todos/11",
    // url: "https://maps. googleapis.com/maps/api/geocode/json?address=Gg.%20Gotong%20Royong%20No.4%20Cilendek%20Bar.%20Bogor%20Bar.%20Kota%20Bogor%20Jawa%20Barat%2016112",
    json : true
},(error, response, body)=> {
    // console.log(JSON.stringify(body, undefined, 5))

    console.log(`Title : ${body.title} `)
} )