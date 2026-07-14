/*
setTimeout(function(){}, delayInMilliSeconds);
*/

/* setTimeout(()=>{

},delayInMilliSeconds);
*/

setTimeout(function(){
    console.log("Alarm is ringing");
},5000);

setTimeout(()=>{
    console.log("Alarm is ringing");
},10000);