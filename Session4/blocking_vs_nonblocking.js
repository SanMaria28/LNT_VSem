function blockingTask(){
    console.log("Blocking Task Started");
    const start =Date.now();
    while(Date.now() - start < 2000){
    }
    console.log("Blocking Task Finished");
}

console.log("Before Blocking task");
blockingTask();
console.log("After Blocking task");