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
    const id = req.params.usersId;
    const foundUser = users.find(user => user.id = Number(id));

    if (foundUser) {
        const updated = req.body;
        users.forEach(user => {
            if(user.id === Number(id)) {
                user.name = updated.name;
            }
        })
    }
    return res.json(users);
};

const deleteUser = (req, res) => {
    const id = req.params.usersId;
    const foundUser = users.find(user => user.id === Number(id));

    if(!foundUser) {
        res.status(400).send({ msg: 'Bad Request.  User not found.'})
    }
    
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === Number(id)) {
            users.splice(i, 1)
        }
    }
    return res.json(users)
};

module.exports = {
    list, 
    show, 
    create, 
    update,
    deleteUser
}