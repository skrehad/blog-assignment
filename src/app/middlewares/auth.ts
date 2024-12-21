import { NextFunction, Request, Response } from 'express';
import config from '../config';
import AppError from '../errors/AppError';
import catchAsync from '../utils/catchAsync';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { UserRegister } from '../modules/auth/auth.model';
import { TUserRole } from '../modules/auth/auth.interface';
const HttpStatus = require('http-status-ts');

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // console.log(...requiredRoles);

    const token = req.headers.authorization;

    console.log('token................', token);
    // checking if the token is missing
    if (!token) {
      throw new AppError(
        HttpStatus.HttpStatus.UNAUTHORIZED,
        'You are not authorized!',
      );
    }

    // checking if the given token is valid
    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string,
    ) as JwtPayload;

    const { role } = decoded;
    console.log(decoded);

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(
        HttpStatus.HttpStatus.UNAUTHORIZED,
        'You are not authorized  hi!',
      );
    }

    req.user = decoded as JwtPayload;
    next();
  });
};

export default auth;
