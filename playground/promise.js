var asyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a  === 'number' && typeof b === 'number'){
                resolve(a + b)
            }
            else {
                reject("Both arguments must be numbers")
            }
        }, 1501)
    })
}


// asyncAdd(5,7).then((res) => {
//     console.log("Result: ",  res)
//     return asyncAdd(res, 33)
// }, (errorMessage) =>{
//     console.log(errorMessage)
// }).then((results)=>{
//     console.log("Should be: ",  results)
// },(err)=> {
//     console.log(err)
// })
asyncAdd(5, 7).then((res) => {
    console.log("Result: ", res)
    return asyncAdd(res, 33)
}).then((results) => {
    console.log("Should be: ", results)
}).catch((error)=> {
    console.log(error)
})


// var somePromise = new Promise((resolve, reject)=>{
//     setTimeout(()=> {
//     // resolve('Hey it works as expected')
//     reject("Something came up, unable to process this further.")
//     }, 2500)
// })

// somePromise.then((message) => {
//     console.log("Success: " + message)
// }, (errorMessage) => {
//     console.log("Error: " + errorMessage)
// }) 

