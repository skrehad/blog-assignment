import express from 'express';
import { BlogController } from './blog.controller';
import { BlogPostValidation } from './blog.validation';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
  '/',
  auth(USER_ROLE.user),
  // validateRequest(BlogPostValidation.blogPostValidationSchema),
  BlogController.createBlog,
);

export const BlogRoutes = router;
