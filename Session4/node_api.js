console.log("start");

setTimeout(()=>{
    console.log("Handled by Node's timer API");
},1000);
setTimeout(()=>{
    console.log("2 Handled by Node's timer API");
},600);
console.log("end");
