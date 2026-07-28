function bookBus(){
    return new Promise(function(resolve, reject){
        console.log("Verifying the availability of seats");
        setTimeout(function(){
            let status = true;
            if(status)
                resolve("Seats available");
            else
                reject("Seats not available");
        },3000);
    });
}

bookBus()
.then(function(msg){
    console.log(msg);
})
.catch(function(err){
    console.log(err);
});
