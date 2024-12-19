import express from 'express';
import { BlogController } from './blog.controller';
import { BlogPostValidation } from './blog.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-blog',
  validateRequest(BlogPostValidation.blogPostValidationSchema),
  BlogController.createBlog,
);

export const BlogRoutes = router;
