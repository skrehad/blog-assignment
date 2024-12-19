import mongoose, { Schema } from 'mongoose';
import { TBlog } from './blog.interface';

// BlogPost Schema Definition
const blogPostSchema = new Schema<TBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: {
      name: { type: String },
      email: { type: String },
      // ref: 'User',
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
);

// Model Creation
export const BlogPost = mongoose.model<TBlog>('BlogPosts', blogPostSchema);
