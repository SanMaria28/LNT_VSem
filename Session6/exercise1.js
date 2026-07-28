function number(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(280);
        },3000);
    });
}
number()
.then(function(message)
{
    console.log(message);
});