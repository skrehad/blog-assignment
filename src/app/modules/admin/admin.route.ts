import express from 'express';
import { adminController } from './admin.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../auth/auth.constant';

const router = express.Router();

router.patch(
  '/users/:userId/block',
  auth(USER_ROLE.admin),
  adminController.blockUserByAdmin,
);

router.delete(
  '/blogs/:id',
  auth(USER_ROLE.admin),
  adminController.deleteBlogByAdmin,
);

export const AdminRoutes = router;
