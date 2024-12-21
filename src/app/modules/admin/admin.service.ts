import { UserRegister } from '../auth/auth.model';
import { currentUserEmail } from '../auth/auth.utils';
import { BlogPost } from '../blogs/blog.model';

const blockUserByAdminIntoDB = async (userId: string) => {
  const receivedEmail = currentUserEmail;
  // const findUser = await UserRegister.findOne({ email: receivedEmail });

  const result = await UserRegister.findByIdAndUpdate(
    userId,
    { isBlocked: true },
    { new: true },
  );
  return result;
};

const deleteBlogByAdminIntoDB = async (id: string) => {
  // const receivedEmail = currentUserEmail;
  // const findUser = await UserRegister.findOne({ email: receivedEmail });
  // //console.log(findUser);
  // if (findUser?.role !== 'admin') {
  //   throw new Error('You are not an admin !');
  // }
  const result = await BlogPost.findByIdAndDelete(id);
  return result;
};

export const adminServices = {
  deleteBlogByAdminIntoDB,
  blockUserByAdminIntoDB,
};
