import mongoose from 'mongoose';
import z from 'zod';

// BlogPost Validation Schema
const blogPostValidationSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters long.' }),
  content: z
    .string()
    .min(10, { message: 'Content must be at least 10 characters long.' }),
  author: z.string(),
  isPublished: z.boolean().default(true),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const BlogPostValidation = {
  blogPostValidationSchema,
};
