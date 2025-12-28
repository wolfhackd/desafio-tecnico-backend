import { User } from '../../models/User.js';
import bycrypt from 'bcrypt';
import type { UserInput } from '../../modules/user/user.controller.js';

export const createUserService = async ({ email, password }: UserInput) => {
  const existsUser = await User.findOne({ email });
  if (existsUser) {
    throw new Error('Email already exists');
  }
  const passwordHash = await bycrypt.hash(password, 10);

  await User.create({ email, password: passwordHash });

  return 'User created';
};
