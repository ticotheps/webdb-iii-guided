const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById
};

function find() {
    return db('roles');
}

function findById(id) {
    return db('roles')
        .where({ id })
        .first();
}