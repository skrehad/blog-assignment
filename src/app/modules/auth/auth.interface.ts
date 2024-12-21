import { Model } from 'mongoose';

export type TLoginUser = {
  email: string;
  password: string;
};
export type TRegisterUser = {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  isBlocked?: boolean;
};

export interface UserModel extends Model<TRegisterUser> {
  isUserExistsEmail(email: string): Promise<TRegisterUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
