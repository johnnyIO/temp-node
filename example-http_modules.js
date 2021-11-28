//http module one of the built in module

const http = require('http');

const server = http.createServer((req, res) => {
//console.log(req);

if(req.url === '/')
{
    res.end('Welcome to iOTech')
}

if(req.url === '/about')
{
 res.end('Here is our short story')
}

res.end(`
    <h1>Oops</h1>
    <p>We can seem to find the page you are looking for </p>
    <a href="/">back home</a>
`)
//  res.write()
//  res.end()
})

server.listen(5000)