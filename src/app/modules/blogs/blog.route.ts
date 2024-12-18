import express from 'express';
import { BlogController } from './blog.controller';

const router = express.Router();

router.post('/create-blog', BlogController.createBlog);

export const BlogRoutes = router;
