import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

// User Schema Definition
const userSchema = new Schema<TUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'] },
  isBlocked: { type: Boolean, default: false },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

// Model Creation
export const User = model<TUser>('Users', userSchema);
