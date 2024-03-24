import express from 'express';
import { createUser, loginUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', createUser);
router.put('/:id', updateUser);
router.post('/login', loginUser);
router.delete('/:id', deleteUser);

export default router;
