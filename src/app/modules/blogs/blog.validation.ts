import z from 'zod';

// BlogPost Validation Schema
const blogPostValidationSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Blog title is required' })
    .max(100, { message: 'Title cannot exceed 100 characters' }),
  content: z.string().min(1, { message: 'Blog content is required' }),
});

export const BlogPostValidation = {
  blogPostValidationSchema,
};
