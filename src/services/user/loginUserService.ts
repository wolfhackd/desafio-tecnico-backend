import { User } from '../../models/User.js';
import bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';
import type { LoginUserDTO } from '../../dtos/User/LoginUser.dto.js';

export const loginUserService = async ({ email, password }: LoginUserDTO) => {

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  // Jwt
  const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET as string, {
    expiresIn: '1d',
  });
  return { token };
};
