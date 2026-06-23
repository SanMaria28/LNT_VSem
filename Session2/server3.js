const http = require('http');

const server =  http.createServer(function(req,res){
    const url = req.url;
    console.log('Visited URL:', url);

    if(url === '/'){
        res.write('Library Home Page');
        res.end();
    }

    else if (url === '/ref'){
        res.write('Reference Section');
        res.end();
    }

    else if (url === '/lit'){
        res.write('Literature Section');
        res.end();
    }

    else if(url === '/scifi'){
        res.write('Science Fiction Section');
        res.end();
    }

    else if(url ==='/dic'){
        res.write('Dictionary Section');
        res.end();
    }

    else{
        res.write('Wrong Page Please try again with different URL');
        res.end();
    }

})

server.listen(2006,function(){
    console.log('Your server started at Port No.:2006');
    console.log('You can try this url');
    console.log('http://localhost:2006/');
    console.log('http://localhost:2006/ref');
    console.log('http://localhost:2006/lit');
    console.log('http://localhost:2006/scifi');
    console.log('http://localhost:2006/dic');
});