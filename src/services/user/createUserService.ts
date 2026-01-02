import type { CreateUserDTO } from '../../dtos/User/CreateUser.dto.js';
import { User } from '../../models/User.js';
import bcrypt from 'bcrypt';

export const createUserService = async ({ email, password }: CreateUserDTO) => {
  const existsUser = await User.findOne({ email });
  if (existsUser) {
    throw new Error('Email already exists');
  }
  const passwordHash = await bcrypt.hash(password, 10);

  await User.create({ email, password: passwordHash });

  return 'User created';
};
