function welcome(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("Welcome Students");
        }, 2000);
    });
}

welcome()
.then(function(message)
{
    console.log(message);
});