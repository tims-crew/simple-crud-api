let persons = require('../person.json');
const { v4: uuidv4 } = require('uuid')

const { writeDataToFile } = require('../utils')

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

function create(product) {
    return new Promise((resolve, reject) => {
        const newProduct = {id: uuidv4(), ...product};
        persons.push(newProduct);
        writeDataToFile('./person.json', persons);
        resolve(newProduct);
    });
}

function update(product, id) {
    return new Promise((resolve, reject) => {
        const index = persons.findIndex(p => p.id === id);
        persons[index] = {id, ...product};
        writeDataToFile('./person.json', persons);
        resolve(persons[index]);
    });
}

function remove(id) {
    return new Promise((resolve, reject) => {
        persons = persons.filter((p) => p.id !== id);
        writeDataToFile('./person.json', persons);
        resolve();
    });
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
};