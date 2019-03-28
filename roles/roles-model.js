const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById
};

function find() {
    return db('roles');
}

function findById() {
    return db('roles')
        .where({ id })
        .first();
}