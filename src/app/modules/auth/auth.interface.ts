export type TLoginUser = {
  id: string;
  password: string;
};
export type TRegisterUser = {
  name: string;
  email: string;
  password: string;
  role?: string;
  isBlocked?: string;
};
