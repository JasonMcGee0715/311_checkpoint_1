const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.get("/users", usersController.list);
router.get("/users/:usersId", usersController.show);
router.post("/users", usersController.create);
router.put("index/:usersId", usersController.update);
router.delete("index/:usersId", usersController.deleteUser);

module.exports = router;