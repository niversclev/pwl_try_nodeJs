const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const d = url.parse(req.url, true); 
    
    let fileLocation
    switch(d.pathname) {
        case "/":
            fileLocation = "pages/viewMahasiswa.html"; 
            break;
        case "/homeMhs":
            fileLocation = "pages/viewMahasiswa.html";
            break;
        case "/insertMhs":
            fileLocation = "pages/insertMahasiswa.html";
            break;
        default:
            fileLocation = "pages/viewMahasiswa.html";
            break;
    }

    fs.readFile(fileLocation, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            return res.end;
        }
        res.writeHead(200, { "Content-Type": 'text/html' });
        res.write(data);
        return res.end();
    });
});

server.listen(8000, () => {
    console.log("Server is running at http://localhost:8000");
});