const http = require('http');

const server = http.createServer(function(req, res) {
    const url = req.url;
    console.log('Visited URL:', url);

    if(url === '/') {
        res.write('Home Page');
        res.end();
    }

    else if (url === '/about'){
        res.write('About Page: Christ University');
        res.end();
    }

    else if (url === '/product'){
        res.write('Product Page');
        res.end();
    }

    else if(url === '/contact'){
        res.write('Contact Page: trainer@christuniversity.in');
        res.end();
    }
    else
    {
        res.write('404 - Page not found');
        res.end();
    }
});

server.listen(3005, function(){
    console.log('Your server started at Port No.:3005');
    console.log('You can try this url');
    console.log('http://localhost:3005/');
    console.log('http://localhost:3005/about');
    console.log('http://localhost:3005/product');
    console.log('http://localhost:3005/contact');
});