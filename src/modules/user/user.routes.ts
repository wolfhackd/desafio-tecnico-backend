import { Router } from 'express';
import { createUser, loginUser } from './user.controller.js';

const userRoutes = Router();

userRoutes.post('/create-user', createUser);
userRoutes.post('/', loginUser);


export default userRoutes;
