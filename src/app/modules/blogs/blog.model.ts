import mongoose, { Schema } from 'mongoose';
import { TBlog } from './blog.interface';

// BlogPost Schema Definition
const blogPostSchema = new Schema<TBlog>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: {
      author_id: { type: Schema.Types.ObjectId },
      name: { type: String },
      email: { type: String },
    },
  },
  {
    timestamps: true,
  },
);

// Model Creation
export const BlogPost = mongoose.model<TBlog>('BlogPosts', blogPostSchema);
