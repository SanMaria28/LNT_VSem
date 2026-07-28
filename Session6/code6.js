function greet(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Hello Developers");
        },3000);
    });
}

greet()
.then (function(message){
    console.log(message);
});