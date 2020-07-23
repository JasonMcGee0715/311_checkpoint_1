const users = require('../data/index');
const usersCount = users.length;

const list = (req, res) => {
    return res.json(users);
};

const show = (req, res) => {
    const id = req.params.usersId;

    const foundUser = users.find(user => user.id === Number(id))
    return res.json(foundUser);
};

const create = (req, res) => {
    const newUser = {
        id: usersCount + 1,
        ...req.body
    }
    users.push(newUser);
    return res.json(users);
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