function main(){
    console.log("main() started");
    greet();
    console.log("main() finished");
}

function greet(){
    console.log("greet() started");
    sayHello();
    sayBye();
    console.log("greet() finished");
}
function sayHello(){
    console.log("Hello");
}
function sayBye(){
    console.log("Bye");
}
main();