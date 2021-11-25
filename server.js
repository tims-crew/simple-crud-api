const http = require('http');
const { getPersons, getPerson,  } = require('./controllers/personController');

const PORT = 5000 || process.env.PORT;

const server = http.createServer((req, res) => {
    // console.log(req.url.split('/')[3]);
    if (req.url === '/api/person' && req.method === 'GET') {
        getPersons(req, res)
    } else if (req.url.match(/\/api\/person\/([0-9])+/) && req.method === 'GET') {
        const id = req.url.split('/')[3];        // /api/person/id
        getPerson(req, res, id);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain'});
        res.end(JSON.stringify('404 - Page Not Found'));
    }
})

server.listen(PORT, () => {
    console.log('listening on port: ' + PORT);
});