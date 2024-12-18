import { Types } from 'mongoose';

export interface TBlogPost {
  title: string;
  content: string;
  author: Types.ObjectId;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}
