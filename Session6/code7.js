function loginStatus(){
    return new Promise(function(resolve,reject){
        let status = true;
        if(status){
            resolve("Login Successful");
        }
        else{
            reject("Login Failed!!");
        }
    });
}

loginStatus()
.then(function(done){
    console.log(done);
})
.catch(function(error){
    console.log(error);
});