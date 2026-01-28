const http = require('http')


// basic
// const server = http.createServer((req, res) => {
//     res.write("Welcome to the home page")
//     res.write(" how are your")
//     res.end()
// })
// server.listen(5000)


// More feature
// const server = http.createServer((req, res) => {
//     if(req.url === '/'){
//         res.end("Home Page")
//     } 
//     else if(req.url === '/about') {
//         res.end("About Page");
//     }
//     else {
//         res.end("Erron Page 404")
//     }
// })
// server.listen(5000)


// Header(res.writeHead)    Headers give extra information to browser.

// 200 → OK

// 404 → Not Found

// 500 → Server Error


const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end('<h1>Home Page</h1>');
    }
    else if(req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end("<h1>About Page</h1>")
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html'});

            res.end("<h1>Page not found 404</h1>")
    }
})

server.listen(5000)