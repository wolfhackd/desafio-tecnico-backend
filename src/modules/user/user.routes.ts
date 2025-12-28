import { Router } from 'express';
import { createUser } from './user.controller.js';

const userRoutes = Router();

userRoutes.post('/create-user', createUser);

export default userRoutes;
