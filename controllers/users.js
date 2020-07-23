const users = require('../data/index');

const list = (req, res) => {
return res.json(users);
};

const show = (req, res) => {

};

const create = (req, res) => {

};

const update = (req, res) => {

};

const deleteUser = (req, res) => {

};

module.exports = {
    list, 
    show, 
    create, 
    update,
    deleteUser
}