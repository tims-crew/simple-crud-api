const http = require('http');
const { getPersons, getPerson, createPerson, updatePerson, deletePerson } = require('./controllers/personController');

if (process.env.NODE_ENV) {
    require('dotenv').config({
        path: `${__dirname}/.env.${process.env.NODE_ENV}`
    });
} else {
    require('dotenv').config();
}

const hostname = process.env.HOST;
const port = process.env.PORT || 5001;

const idRegex = /\/api\/person\/\w+/;

const server = http.createServer((req, res) => {
    if (req.url === '/api/person' || req.url === '/api/person/' && req.method === 'GET') {
        getPersons(req, res)
    } else if (req.url.match(idRegex) && req.method === 'GET') {
        const id = req.url.split('/')[3];        // /api/person/id
        getPerson(req, res, id);
    } else if (req.url.match(/\/api\/person\/?/) && req.method === 'POST') {
        createPerson(res, req);
    } else if (req.url.match(idRegex) && (req.method === 'PUT' || req.method === 'PATCH')) {
        const id = req.url.split('/')[3];  
        updatePerson(res, req, id);
    } else if (req.url.match(idRegex) && req.method === 'DELETE') {
        const id = req.url.split('/')[3];  
        deletePerson(res, req, id);
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain'});
        res.end(JSON.stringify('Route Not Found'));
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at: http://${hostname}:${port}/`);
});