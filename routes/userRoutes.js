const express = require('express');
const { createUser, loginUser, updateUser, deleteUser } = require('../controllers/userController.js');

const router = express.Router();

router.post('/register', createUser);
router.put('/:id', updateUser);
router.post('/login', loginUser);
router.delete('/:id', deleteUser);

module.exports=router;
