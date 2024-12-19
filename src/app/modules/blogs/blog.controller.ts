import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogServices } from './blog.service';
import { loginEmail } from '../auth/auth.utils';
import { User } from '../user/user.model';

const createBlog = catchAsync(async (req, res) => {
  const { title, content } = req.body;

  const receivedEmail = loginEmail;
  // console.log('Received email in blogController:', receivedEmail);

  const findUser = await User.find({ email: receivedEmail });
  // console.log(findUser);

  const { name, email } = findUser[0];

  const author = {
    name,
    email,
  };
  // console.log(author);

  const blogData = {
    title,
    content,
    author,
  };

  const result = await BlogServices.createBlogIntoDB(blogData);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'User is created successfully',
    data: result,
  });
});

export const BlogController = {
  createBlog,
};
