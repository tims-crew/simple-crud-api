const Person = require('../modules/personModule');

const { getPostData } = require('../utils')

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

//@desc Create person
//@route POST /api/person/
async function createPerson(res, req) {
    try { 
        const body = await getPostData(req);

        if (!body || body === {}) {
            console.log(body);

            res.writeHead(400, { 'Content-Type': 'plain/text' });
            res.end('Please, write something before POSTing!!!');
        } else {
            const { name, age, hobbies } = JSON.parse(body);

            const product = {
                name,
                age,
                hobbies
            };
    
            const newProduct = await Person.create(product);
    
            res.writeHead(201, { 'Content-Type': 'application/json'});
            return res.end(JSON.stringify(newProduct));
        }
    } catch(e) {
        console.error(e);
    }
}

//@desc Updates person by ID
//@route PUT/PATCH /api/person/:id
async function updatePerson(res, req, id) {
    try { 
        const body = await getPostData(req);
        const person = await Person.findById(id);

        if (!body || body === {}) {
            console.log(body);

            res.writeHead(400, { 'Content-Type': 'plain/text' });
            res.end('Please, write something before update!!!');
        } else {
            const { name, age, hobbies } = JSON.parse(body);

            const product = {
                name: name || person.name,
                age: age || person.age,
                hobbies: hobbies || person.hobbies
            };
    
            const updPersons = await Person.update(product, id);
    
            res.writeHead(201, { 'Content-Type': 'application/json' });
            return res.end(JSON.stringify(updPersons));
        }
    } catch(e) {
        console.error(e);
    }
}

//@desc Removes person by ID
//@route DELETE /api/person/:id
async function deletePerson(req, res, id) {
    try {
        const product = await Person.findById(id)

        if(!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            await Person.remove(id);
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: `Person with id: ${id} removed` }))
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getPersons,
    getPerson,
    createPerson,
    updatePerson,
    deletePerson
};