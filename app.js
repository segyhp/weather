const request = require('request')

request({
    url: "https://jsonplaceholder.typicode.com/todos/14",
    json : true
},(error, response, body)=> {
    console.log(JSON.stringify(body, undefined, 5))
} )