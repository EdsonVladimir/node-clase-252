const http = require("http");

/**const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end("!Hola mundo desde el servidor Node.Js--------->");
})*/

/**const server = http.createServer((req, res) => {
    console.log("Todo lo que llega al REQ", req);

    if(req.url === '/') {
        res.end("Pagina de inicio");
    } else if(req.url === '/contacto') {
        res.end("Pagina de contacto")
    } else {
        res.writeHead(404);
        res.end("Pagina no encontrada");
    }
})*/

/**const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end(`
        <html>
            <head><title>252-web</title></head>
            
            <body>
                <h1>Bienvenido a 252</h1>
                <p>Servidor nodeJs con Html!!!!</p>
            </body>
        </html>
        `);
})*/

const server = http.createServer((req, res) => { 
    if(req.method === 'GET' && req.url === "/") {
        res.writeHead(200, {"content-type": "text/json"});
        const data = {
            "saludo": "Hola desde mi servidor te envio un JSON"
        }

        res.end(JSON.stringify(data));
    }    

})

server.listen(3000, () => {
    console.log("Servidor conectado en el puerto 3000");
})