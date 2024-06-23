const express = require('express');
const { getUsers, addUser, deleteUser, getDeleteLog } = require('../controllers/users.controller');

const router = express.Router();

/* GET users listing. */
router.get('/', getUsers);

router.post('/new', addUser);

router.delete('/delete/:id', deleteUser);

router.get('/deleteLog', getDeleteLog);

module.exports = router;
