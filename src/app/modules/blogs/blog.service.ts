import { User } from '../user/user.model';
import { TBlog } from './blog.interface';
import { BlogPost } from './blog.model';

const createBlogIntoDB = async (payload: TBlog) => {
  const result = await BlogPost.create(payload);
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
};
