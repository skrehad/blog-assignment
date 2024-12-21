import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { adminServices } from './admin.service';

const blockUserByAdmin = catchAsync(async (req, res) => {
  const { userId } = req.params;
  // //console.log(req.params);
  await adminServices.blockUserByAdminIntoDB(userId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User is Block successfully',
  });
});

const deleteBlogByAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  // //console.log(req.params);
  await adminServices.deleteBlogByAdminIntoDB(id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Blog is delete successfully by Admin',
  });
});

export const adminController = {
  deleteBlogByAdmin,
  blockUserByAdmin,
};
