import QueryBuilder from '../../builder/QueryBuilder';
import { BlogSearchableFields } from './blog.constant';
import { TBlog } from './blog.interface';
import { BlogPost } from './blog.model';

const createBlogIntoDB = async (payload: TBlog) => {
  const result = await BlogPost.create(payload);
  return result;
};

const getAllBlogsFromDB = async (query: Record<string, unknown>) => {
  console.log(query);
  const id = query.filter;

  console.log(id);

  const result = await BlogPost.find({ 'author.author_id': id });

  // const blogQuery = new QueryBuilder(BlogPost.find(), query)
  //   .search(BlogSearchableFields)
  //   .filter()
  //   .sort()
  //   .fields();
  // console.log(blogQuery.query.filter);

  // // Execute the query and return the result
  // return blogQuery.modelQuery;
  return result;
};
const updateBlogFromDb = async (id: string, payload: Partial<TBlog>) => {
  const result = await BlogPost.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteBlogFromDb = async (id: string) => {
  console.log(id);
  const result = await BlogPost.findByIdAndDelete(id);
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  updateBlogFromDb,
  deleteBlogFromDb,
};
