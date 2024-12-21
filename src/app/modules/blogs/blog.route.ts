import express from 'express';
import { BlogController } from './blog.controller';
import { BlogPostValidation } from './blog.validation';
import validateRequest from '../../middlewares/validateRequest';
import { USER_ROLE } from '../auth/auth.constant';
import auth from '../../middlewares/auth';
const router = express.Router();

// for create a blog post
router.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(BlogPostValidation.blogPostValidationSchema),
  BlogController.createBlog,
);
// for get all blog post
router.get('/', BlogController.getAllBlog);

// for update a blog post
router.patch(
  '/:id',
  auth(USER_ROLE.user),
  validateRequest(BlogPostValidation.updateBlogPostValidationSchema),
  BlogController.updateBlog,
);

// for delete a blog post
router.delete('/:id', auth(USER_ROLE.user), BlogController.deleteBlog);

export const BlogRoutes = router;
