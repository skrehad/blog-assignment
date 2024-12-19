import { Schema, model } from 'mongoose';
import { TRegisterUser, UserModel } from './auth.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

// Schema definition for User
const userRegisterSchema = new Schema<TRegisterUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: 0 },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    isBlocked: { type: Boolean, default: false },
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

userRegisterSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

userRegisterSchema.statics.isUserExistsByCustomId = async function (
  id: string,
) {
  return await UserRegister.findOne({ id }).select('+password');
};

userRegisterSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

userRegisterSchema.statics.isJWTIssuedBeforePasswordChanged = function (
  passwordChangedTimestamp: Date,
  jwtIssuedTimestamp: number,
) {
  const passwordChangedTime =
    new Date(passwordChangedTimestamp).getTime() / 1000;
  return passwordChangedTime > jwtIssuedTimestamp;
};

// Create and export the User model
export const UserRegister = model<TRegisterUser, UserModel>(
  'Users',
  userRegisterSchema,
);
