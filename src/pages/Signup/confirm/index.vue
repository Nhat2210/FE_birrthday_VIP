
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import type { UploadFileInfo } from 'naive-ui';
import { api } from '@/api/axios';

const message = useMessage();
const defaultAvatar = '@/assets/img/cat.png';
const { push } = useRouter();
const useStore = useUserStore();
const userData = useStore.$state;

interface UserResponse {
  fullName: string;
  generation: string | number | null;
  phoneNumber: string;
  facebook: string;
  email: string;
  id: string;
  image: string;
}

interface APIUserResponse {
  code: number;
  message: string;
  error: string;
  data: UserResponse;
}

interface IUserSignup {
  fullName: string;
  email: string;
  generation: string | number | null;
  phoneNumber: string;
  facebook: string;
  isFaceCheckin: boolean;
  fileList: UploadFileInfo[];
  previewLink?: string;
}

const signup = async (user: IUserSignup) => {
  const formData = new FormData();
  formData.append('fullName', user.fullName);
  formData.append('generation', user.generation || '');
  formData.append('facebook', user.facebook);
  formData.append('email', user.email);
  formData.append('phoneNumber', user.phoneNumber);
  
  const uploadedFile = user.fileList[0]; 
  if (uploadedFile) {
    formData.append('image', uploadedFile.file as File);
  }
  
  return api.post<APIUserResponse>('https://api.viphaui.com/api/v1/users/signup', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

const picture = computed(() => {
  return userData.image ? `https://api.viphaui.com/${userData.image}` : defaultAvatar;
});

const handleContinue = async () => {
  try {
    const userSignupData: IUserSignup = {
      fullName: userData.fullName,
      email: userData.email,
      generation: userData.generation,
      phoneNumber: userData.phoneNumber,
      facebook: userData.facebook,
      isFaceCheckin: false,
      fileList: userData.fileList || [],
    };

    const { data } = await signup(userSignupData);

    useStore.setUser({
      fullName: data.data.fullName,
      email: data.data.email,
      generation: data.data.generation as string,
      phoneNumber: data.data.phoneNumber,
      facebook: data.data.facebook,
      image: data.data.image,
      id: data.data.id, 
    });

    console.log('Đăng ký thành công:', data.data);
    push('/signup/qr');
  } catch (err: any) {
    const messageError = err?.response?.data?.message || err.message;
    message.error(messageError);
  }
};
</script>



<template>
  <div class="signup">
    <div class="left-body">
      <div class="logo">
        <a href="" @click="push('/')"><img src="@/assets/signup/logo.png" alt=""></a>
      </div>
      <h1>Xác nhận thông tin cá nhân để đăng ký</h1>
      <p>
          Cảm ơn bạn đã chia sẻ thông tin cá nhân quan trọng. Vui lòng xác nhận rằng thông tin dưới đây là chính xác để hoàn tất quá trình đăng ký
      </p>
    </div>
    <div class="right">
      <div class="right-body">
          <div class="avatar">
            <img src="@/assets/img/cat.png" alt="" v-if="userData.image='null'">
            <img :src="picture" alt="" v-else>
          </div>
          <div class="infor">
            <div class="fullName tt">
              <i class="fa-solid fa-user"></i>
              <p>{{ userData.fullName }}</p>
            </div>
            <div class="generation tt">
              <i class="fa-solid fa-briefcase"></i>
              <p>{{ userData.generation }}</p>
            </div>
            <div class="email tt">
              <i class="fa-solid fa-envelope"></i>
              <p>{{ userData.email }}</p>
            </div>
            <div class="phoneNumber tt">
              <i class="fa-solid fa-phone"></i>
              <p>{{ userData.phoneNumber }}</p>
            </div>
            <div class="facebook tt">
              <i class="fa-brands fa-facebook"></i>
              <p>{{ userData.facebook }}</p>
            </div>
          </div>
      </div>
      <div class="button">
          <button class="btn-return" @click="push('./')">Quay lại</button>
          <button class="btn-continue" @click="handleContinue()">Tiếp tục</button>
      </div>
    </div>
    <img src="@/assets/img/cloud.png" alt="" class="cloud">
    <img src="@/assets/img/birthday.png" alt="" class="birthday">
  </div>
</template>

<style scoped lang="scss">
@import '@styles/_mixins.scss';
.signup {
    display: flex;
    height: 100vh;
    box-sizing: border-box;
    position: relative;
    @include mobile {
        display: flex;
        flex-direction: column;
    }
}

.left-body {
    color: #fff;
    background: linear-gradient(to right, #6ea3f1, #4c85db);
    width: calc(50% - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 50px;
    @include mobile {
      width: 100%;
      padding: 20px 20px;
    }
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        background: #fff;
        overflow: hidden;
        border: 3px solid #0077fe;
    }
    
    img {
        width: 120px;
        height: 120px;
        object-fit: contain;
        border-radius: 50%;
    }
    
    h1 {
        font-size: 36px;
        width: 70%;
    }
    
    p {
        width: 70%;
        font-size: 18px;
        line-height: 1.6;
    }
}

.right {
    width: calc(50% - 40px);
    margin: 20px;
    flex-grow: 1;    
    @include mobile {
      width: 100%;
    }
    .right-body {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .avatar {
        width: 200px;
        height: 200px;
        border-radius: 15px;
        border: 4px solid #6ea3f1;
        margin-bottom: 20px; 
        cursor: pointer;
        
        img {
            width: 100%;
            display: block;
        }
    }
    
    .infor {
        margin-bottom: 20px;
        cursor: pointer;
        .tt {
            margin-left: 20%;
            display: flex;
            gap: 20px;
            align-items: center;
        }
        width: 100%;
        p {
            text-align: start;
            font-size: 18px;
        }
        i {
            font-size: 20px;
        }
    }
}

.btn {
    margin-top: 20px;
    width: 70%;
    padding: 15px 20px;
    border-radius: 15px;
    border: none;
    background: #398ae7;
    color: #fff;
    font-size: 18px;
    text-align: center;
}
.button {
    display: flex;
    justify-content: center;
    button {
        cursor: pointer;
        font-size: 18px;
        font-weight: 600;
        padding: 17px 70px;
        margin-left: 20px;
        border: none;
        border-radius: 999px;
        @include mobile {
          padding: 12px 20px;
          font-size: 12px;
          margin-left: 0;
          margin-bottom: 20px;
          margin-right: 25px;
        }
    }
    .btn-continue {
        background: #6ea3f1;
        color: #fff;
    }
}
.cloud {
    width: 10%;
    height: 100%;
    position: absolute;
    right: 49%;
    @include mobile {
      display: none;
    }
}
.birthday {
    width: 25%;
    bottom: 0;
    right: 43%;
    position: absolute;
    @include mobile {
      display: none;
    }
}
.btn-continue:hover {
    background-color: #6393dc;
    color: #f3f3f3;
    cursor: pointer;
}
</style>