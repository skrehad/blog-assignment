import express from 'express';
import { BlogController } from './blog.controller';
import { BlogPostValidation } from './blog.validation';
import validateRequest from '../../middlewares/validateRequest';
const router = express.Router();

// for create a blog post
router.post(
  '/',
  validateRequest(BlogPostValidation.blogPostValidationSchema),
  BlogController.createBlog,
);
// for get all blog post
router.get('/', BlogController.getAllBlog);

// for update a blog post
router.patch(
  '/:id',
  validateRequest(BlogPostValidation.updateBlogPostValidationSchema),
  BlogController.updateBlog,
);

// for delete a blog post
router.delete('/:id', BlogController.deleteBlog);

export const BlogRoutes = router;
