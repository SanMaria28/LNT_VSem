function libIssue(){
    return new Promise(function(resolve, reject){
        console.log("Checking the availability of books");
        setTimeout(function(){
            let status = true;
            if(status)
                resolve("Available");
            else
                reject("Not Available");
        },3000);
    });
}

libIssue()
.then(function(msg){
    console.log(msg);
})
.catch(function(err){
    console.log(err);
});
