const port = 5000;

const http = require('http');

const fs = require('fs');

const server = http.createServer( (req, res) => {
    //Read (parse) the input html file
    fs.readFile('index.html', (err, data) => {
        //case 1: read file error => show error
        if (err)
            console.log(err);
        else {
            res.write(data);
            res.end();
        }
    });
});

server.listen(port, () => {
    console.log("http://localhost:" + port);
});