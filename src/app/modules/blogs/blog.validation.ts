import z from 'zod';

// BlogPost Validation Schema
const blogPostValidationSchema = z.object({
  title: z.string().min(1, 'Title is required'), // Title must be a non-empty string
  content: z.string().min(1, 'Content is required'), // Content must be a non-empty string
  author: z
    .object({
      name: z.string().optional(), // Author name is optional
      email: z.string().email('Invalid email').optional(), // Email must be valid if provided
    })
    .optional(), // The entire author object is optional
});

export const BlogPostValidation = {
  blogPostValidationSchema,
};
