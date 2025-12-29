
import type {Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  sub: string;
}

export function authMiddleware(req: Request, res: Response, next: NextFunction){
  const authHeader = req.headers.authorization;

  if(!authHeader){
    return res.status(401).json({message: 'Token not provided'});

  }

  const [type, token] = authHeader.split(' ');

  if(type !== 'Bearer' || !token){
    return res.status(401).json({message: 'Invalid token format'});
  }

  try{
    if(!process.env.JWT_SECRET){
      throw new Error('JWT_SECRET is not defined');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;

    req.user = {
      id: decoded.sub,
    };

    next();

  }catch(e){
    return res.status(401).json({
      message: 'Invalid or expired token',
    });
  }
}