import express from 'express';
const router = express.Router();
import { getUserInfo, updateUser } from '../controllers/user.js';

//http://localhost:8000/api/users/me
router.get('/me', getUserInfo);

//http://localhost:8000/api/users/me/u
router.put('/me/u', updateUser);

export default router;
