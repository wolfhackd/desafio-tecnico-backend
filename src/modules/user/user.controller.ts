import type { Request, Response } from 'express';
import { createUserService } from '../../service/user/createUserService.js';

export interface UserInput {
  email: string;
  password: string;
}

export async function createUser(req: Request, res: Response) {
  try {
    const { email, password } = req.body as UserInput;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    const createdUser = await createUserService({ email, password });
    return res.status(201).json(createdUser);
  } catch (e: any) {
    return res.status(500).json({ message: e.message });
  }
}
