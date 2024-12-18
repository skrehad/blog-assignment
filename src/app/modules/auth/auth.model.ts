import { Schema, model } from 'mongoose';
import { TRegisterUser } from './auth.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

// Schema definition for User
const userRegisterSchema = new Schema<TRegisterUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: 0 },
  },
  {
    timestamps: true,
  },
);

userRegisterSchema.pre('save', async function (next) {
  const user = this; // doc
  // hashing password and save into DB

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );

  next();
});

// Create and export the User model
export const UserRegister = model<TRegisterUser>('User', userRegisterSchema);
