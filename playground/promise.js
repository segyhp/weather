var somePromise = new Promise((resolve, reject)=>{
    setTimeout(()=> {
    // resolve('Hey it works as expected')
    reject("Something came up, unable to process this further.")
    }, 2500)
})

somePromise.then((message) => {
    console.log("Success: " + message)
}, (errorMessage) => {
    console.log("Error: " + errorMessage)
}) 