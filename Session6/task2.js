function name(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("San");
        }, 3000);
    });
}
name()
.then(function(msg){
    console.log(msg);
})