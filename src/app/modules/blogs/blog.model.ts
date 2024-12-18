import mongoose, { Schema, Types } from 'mongoose';
import { TBlogPost } from './blog.interface';
import { User } from '../user/user.model';

// BlogPost Schema Definition
const blogPostSchema = new Schema<TBlogPost>({
  title: { type: String, required: true, unique: true },
  content: { type: String, required: true },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  isPublished: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// For Check Author ID in the Model
// blogPostSchema.pre('save', async function (next) {
//   const blog = this as TBlogPost;
//   const userExists = await User.exists({ _id: blog.author });

//   if (!userExists) {
//     return next(new Error('Author must be a valid user ID.'));
//   }

//   next();
// });

// Model Creation
export const BlogPost = mongoose.model<TBlogPost>('BlogPosts', blogPostSchema);
