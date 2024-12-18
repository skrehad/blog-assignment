import z from 'zod';

const userValidationSchema = z.object({
  name: z.string().min(3, { message: 'Name is required.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' }),
  role: z.enum(['admin', 'user']),
  isBlocked: z.boolean().default(false),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const UserValidation = {
  userValidationSchema,
};
