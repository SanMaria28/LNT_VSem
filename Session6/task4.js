function result(){
    return new Promise(function(resolve,reject){
        let marks =36;
        if(marks>=40){
            resolve("Passed");
        }
        else{
            reject("Failed");
        }
    });
}

result()
.then(function(msg){
    console.log(msg);
})
.catch(function(err){
    console.log(err);
});
