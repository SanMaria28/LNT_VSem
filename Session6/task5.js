function withdraw(amount){
    return new Promise(function(resolve,reject){
        let balance = 1000;
        if(amount <= balance){
            balance -= amount;
            resolve("Withdrawal successful. Remaining balance: " + balance);
        }
        else{
            reject("Insufficient funds");
        }
    });
}

withdraw(1500)
.then(function(msg){
    console.log(msg);
})
.catch(function(err){
    console.log(err);
});