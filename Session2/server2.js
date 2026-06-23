const http = require('http');

const server =  http.createServer(function(req,res){
    const url = req.url;
    console.log('Visited URL:', url);

    if(url === '/'){
        res.write('Christ University Home Page');
        res.end();
    }

    else if (url === '/adse'){
        res.write('Department of Artificial Intelligence and Data Science Engineering');
        res.end();
    }

    else if (url === '/ece'){
        res.write('Department of Electronics and Communication Engineering');
        res.end();
    }

    else if(url === '/eee'){
        res.write('Department of Electrical and Electronics Engineering');
        res.end();
    }

    else if(url ==='/me'){
        res.write('Department of Mechanical Engineering');
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
    console.log('http://localhost:2006/adse');
    console.log('http://localhost:2006/ece');
    console.log('http://localhost:2006/eee');
    console.log('http://localhost:2006/me');
});