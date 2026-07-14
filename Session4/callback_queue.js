function first()
{
    console.log("First Callback");
}
function second(){
    console.log("Second Callback");
}

setTimeout(first, 100);
setTimeout(second,50);
console.log("Main program finished");