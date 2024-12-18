import { User } from '../user/user.model';
import { TBlogPost } from './blog.interface';
import { BlogPost } from './blog.model';

const createBlogIntoDB = async (payload: TBlogPost) => {
  // For Check Author ID in the Service
  const isValidAuthor = await User.exists({ _id: payload.author });
  if (!isValidAuthor) {
    throw new Error('Author must be a valid user ID.');
  }

  const result = await BlogPost.create(payload);
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
};
