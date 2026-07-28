function eligible(){
    return new Promise(function(resolve,reject){
        let age =19;
        if(age>=18){
            resolve("Eligible for Voting");
        }
        else{
            reject("Not Eligible for Voting");
        }
    });
}

eligible()
.then(function(msg){
    console.log(msg);
})
.catch(function(err){
    console.log(err);
});
