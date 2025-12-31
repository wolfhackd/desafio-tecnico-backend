import type { Request, Response } from 'express';
import { createUserService } from '../../services/user/createUserService.js';
import { loginUserService } from '../../services/user/loginUserService.js';
import type { CreateUserDTO } from '../../dtos/User/CreateUser.dto.js';
import type { LoginUserDTO } from '../../dtos/User/LoginUser.dto.js';



export async function createUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body as CreateUserDTO;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    const createdUser = await createUserService({ email, password });
    return res.status(201).json(createdUser);
  } catch (e: any) {
    return res.status(500).json({ message: e.message });
  }
}

export async function loginUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body as LoginUserDTO;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    const loggedUser = await loginUserService({ email, password });
    return res.status(200).json(loggedUser);
  } catch (e: any) {
    return res.status(500).json({ message: e.message });
  }
}
