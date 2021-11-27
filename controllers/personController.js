const Person = require('../modules/personModule');

//@desc Gets all people
//@route GET /api/person
async function getPersons(req, res) {
    try {
        const person = await Person.findAll();

        if (!person) {
            res.writeHead(400, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify('message: not found'));
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json'});
            res.end(JSON.stringify(person));
        }
        
    } catch(e) {
        console.error(e);
    }
}

//@desc Gets person by ID
//@route GET /api/person/:id
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

async function createPerson(res, req, id) {
    try {
        const product = {
            "name": "name",
            "desc": "description"
        };

        const body = await Person.create(product);

        res.writeHead(201, { 'Content-Type': 'application/json'});
        return res.end(JSON.stringify(body));        
    } catch(e) {
        console.error(e);
    }
}

module.exports = {
    getPersons,
    getPerson,
    createPerson
};