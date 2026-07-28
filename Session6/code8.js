function checkResult(){
    return new Promise(function(resolve, reject){
        console.log("University evaluates the papers");
        setTimeout(function(){
            let marks =79;
            if(marks>=35)
                resolve("You passed this exam");
            else
                reject("You failed this exam");
        },3000);
    });
}
console.log("Students are waiting for their result");
checkResult()
.then(function(msg){
    console.log(msg);
})
.catch(function(err){
    console.log(err);
});
console.log("Students are attending another class");