import { z } from 'zod';

const loginValidationSchema = z.object({
  email: z.string({ required_error: 'Id is required.' }),
  password: z.string({ required_error: 'Password is required' }),
});
const RegisterValidationSchema = z.object({
  name: z.string({ required_error: 'Name is required.' }),
  email: z
    .string({ required_error: 'Email is required.' })
    .email('Invalid email format'),
  password: z.string({ required_error: 'Password is required.' }),
  role: z.string().default('user'), // Default value set to 'user'
  isBlocked: z.boolean().default(false), // Default value set to false
});

const refreshTokenValidationSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh token is required!',
    }),
  }),
});

export const AuthValidation = {
  loginValidationSchema,
  RegisterValidationSchema,
  refreshTokenValidationSchema,
};
