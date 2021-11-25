const persons = require('../person.json');

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(persons);
    });
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const person = persons.find((p) => p.id == id);
        resolve(person);
    });
}

module.exports = {
    findAll,
    findById
}