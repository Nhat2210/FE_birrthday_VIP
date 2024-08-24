import type { UploadFileInfo } from 'naive-ui';

export interface UserLogin {
  account: string;
  password: string;
}

export interface UserLoginResponse {
  data: {
    access_token: string;
  };
}

export interface IUser {
  fullName: string;
  course: string | number | null;
  phone: string;
  facebook: string;
  email: string;
}

export interface UserResponse extends IUser{
  id: string;
  image: string
}

export interface APIUserResponse {
  code: number,
  message: string,
  error: string,
  data: {
    user: UserResponse;
  };
}

export interface APIUpdateFaceResponse {
  code: number,
  message: string,
  error: string,
  data: {
    token: string;
  };
}

export interface CheckinFaceResponse {
  name: string;
  course: string;
  message?: string,
}

export interface IUserSignup extends IUser {
  isFaceCheckin: boolean;
  previewLink?: string;
  recaptcha: string;
  fileList: UploadFileInfo[];
}

export interface IUserUpdate extends IUser {
  isFaceCheckin: boolean;
  previewLink?: string;
  fileList: UploadFileInfo[];
}

export interface UserUpdateBody extends IUser {
  
}