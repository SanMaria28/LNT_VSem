function bellRing(){
    console.log("Bell Rang at: ", new Date().toLocaleTimeString());
}

function startBellSystem(){
    const now = new Date();
    const nextBell = new Date();

    nextBell.setMinutes(55);
    nextBell.setSeconds(0);
    nextBell.setMilliseconds(0);

    if(now.getMinutes() > 55){
        nextBell.setHours(nextBell.getHours()+1);
    }

    const delay = nextBell - now;
    console.log("Every time: ", delay/1000, "seconds");

    setTimeout(()=>{
        bellRing();
        setInterval(bellRing, 60*60*1000);
    },delay
    );
}
startBellSystem();