import express from 'express';
import { BlogController } from './blog.controller';
import { BlogPostValidation } from './blog.validation';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../auth/auth.constant';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(BlogPostValidation.blogPostValidationSchema),
  BlogController.createBlog,
);
router.get(
  '/',
  //  auth(USER_ROLE.user),
  BlogController.getAllBlog,
);

router.patch('/:id', auth(USER_ROLE.user), BlogController.updateBlog);

router.delete('/:id', auth(USER_ROLE.user), BlogController.deleteBlog);

export const BlogRoutes = router;
