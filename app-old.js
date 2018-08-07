const http = require('http'); //import the library http

http.createServer((req, res) => { // create an object for http with two parameters
        // res.write('Hola Mundo');
        res.writeHead(200, { 'Content-Type': 'application/json' }); // create an json object

        let salida = { // create an json object
            nombre: 'fernando',
            edad: 32,
            url: req.url
        }
        res.write(JSON.stringify(salida)); // convert to json
        res.end(); //close the respuesta
    })
    .listen(8080); // apply the port that is going to be ready for the app

console.log('Escuchando el puerto 8080'); //print in console