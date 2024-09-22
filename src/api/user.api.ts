import { api, apiDefault } from '@axios';
import type {
  IUserSignup,
  UserLogin,
  APIUserResponse,
  UserLoginResponse,
} from '@/types/user.types';
// import type { RequestParams } from '@/types/params.type.ts';
// import { PAGE_SIZE_DEFAULT } from '@/enums';

export const login = (userLogin: UserLogin) => {
  return api.post<UserLoginResponse>(`/v1/auth/login`, userLogin);
};



export const checkInFromQrCode = (qrCodeResult: string) => {
  return api.post<APIUserResponse>(`/admin/v1/users/checkin-qr/${qrCodeResult}`);
};

export const checkInFromFace = (image: File) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  };

  const formData = new FormData();
  formData.append('img', image, "face.png");
  return api.post<APIUserResponse>(
    `/admin/v1/users/checkin-face`,
    formData,
    config
  );
};

export const renewQR = (q: string) => {  
  return api.get<APIUserResponse>('/api/v1/users/renew-qr', {
    params: { q },
  });
};

export const checkLinkUpdateFace = (token: string | null) => {
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  return apiDefault.get<APIUserResponse>(
    `/v1/users/check-link`,
    config
  );
};

export const updateFace = (token: string | null, image: File| null) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`
    }
  };

  const formData = new FormData();
  if(image) formData.append('image', image, "face.png");
  return apiDefault.put<APIUserResponse>(
    `/v1/users`,
    formData,
    config
  );
};