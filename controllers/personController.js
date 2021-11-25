const Person = require('../modules/personModule');

async function getPersons(req, res) {
    try {
        const person = await Person.findAll();

        if (!person) {
            res.writeHead(400, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify('message not found'));
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify(person));
        }
        
    } catch(e) {
        console.error(e);
    }
}

async function getPerson(req, res, id) {
    try {
        const person = await Person.findById(id);

        if (!person) {
            res.writeHead(400, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify('message not found'));
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify(person));
        }
        
    } catch(e) {
        console.error(e);
    }
}

module.exports = {
    getPersons,
    getPerson
};