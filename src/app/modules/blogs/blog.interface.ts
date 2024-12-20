import { Types } from 'mongoose';

export interface TBlog {
  title: string;
  content: string;
  author: {
    author_id: Types.ObjectId;
    name: string;
    email: string;
  };
}
