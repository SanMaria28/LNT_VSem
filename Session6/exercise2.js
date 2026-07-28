function feePayment(){
    return new Promise(function(resolve, reject){
        console.log("Verifying the status");
        setTimeout(function(){
            let status = true;
            if(status)
                resolve("Receipt Generated");
            else
                reject("Payment failed");
        },3000);
    });
}

feePayment()
.then(function(msg){
    console.log(msg);
})
.catch(function(err){
    console.log(err);
});
