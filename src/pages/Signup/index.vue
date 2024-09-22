<script setup lang="ts">
import type { UploadFileInfo } from 'naive-ui';
import type { FormInst, FormItemRule, SelectOption, NotificationType } from 'naive-ui';
import { required } from '@vuelidate/validators';
import { api } from '@/api/axios';
import { useMessage, useNotification } from 'naive-ui';
import { useRouter } from 'vue-router';
import { ref, reactive } from 'vue';
import { useUserStore } from '@/stores/user';
import QRCodeVue3  from 'qrcode-vue3';


const userStore = useUserStore();

const useStore = useUserStore();
const message = useMessage();
const loading = ref<boolean>(false);
const userId = ref<string | undefined>('');

const { push } = useRouter();

const options: SelectOption[] = Array.from(Array(19).keys()).reduce(
  (a, b) => {
    if (b != 0) {
      a.push({
        label: `Khóa ${b <= 9 ? '0' + b : b}`,
        value: `${b <= 9 ? '0' + b : b}`
      });
    }
    return a;
  },
  <SelectOption[]>[]
);

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
  data: UserResponse
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

const formRef = ref<FormInst | null>(null);
const formValue = reactive<IUserSignup>({
  fullName: '',
  email: '',
  generation: '',
  phoneNumber: '',
  facebook: '',
  isFaceCheckin: false,
  fileList: [],
});

const signup = async (user: IUserSignup) => {
  const formData = new FormData();
  formData.append('fullName', user.fullName);
  formData.append('generation', user.generation || '');
  formData.append('facebook', user.facebook);
  formData.append('email', user.email);
  formData.append('phoneNumber', user.phoneNumber);
  const uploadedFile = user.fileList[0]; 
  if (uploadedFile) {
    formData.append('image', user.fileList[0]!.file as File);
    console.log('Uploaded file:', uploadedFile);
    console.log('File name:', uploadedFile.name);
  }
  console.log("file image", formData.get('image'));
  console.log(formData.get('email'));
  return api.post<APIUserResponse>('https://api.viphaui.com/api/v1/users/signup', formData,{
  headers: {
    'Content-Type': 'multipart/form-data',
  },
} );
};

const rules = {
  fullName: {
    required: true,
    validator(rule: FormItemRule, value: string) {
      if (!value) {
        return new Error('Vui lòng nhập họ và tên');
      } else if (value.length < 3) {
        return new Error('Họ và tên không được quá ngắn');
      } else if (value.length > 30) {
        return new Error('Họ và tên không được vượt quá 30 ký tự');
      } else if (!/^[\p{L}\s]*$/u.test(value)) {
        return new Error('Họ và tên không được chứa số, ký tự đặc biệt');
      }
      return true;
    },
    trigger: ['input', 'blur']
  },
  generation: {
    required: true,
    message: 'Vui lòng chọn khóa',
    trigger: ['input', 'blur']
  },
  email: {
    required: true,
    validator(rule: FormItemRule, value: string) {
      if (!value) {
        return new Error('Vui lòng nhập email');
      } else if (!/^[a-zA-Z0-9](\.?[a-zA-Z0-9])+@g(oogle)?mail\.com$/.test(value)) {
        return new Error('Định dạng email không hợp lệ (chỉ chấp nhận gmail)');
      }
      return true;
    },
    trigger: ['input', 'blur']
  },
  phoneNumber: {
    required: true,
    validator(rule: FormItemRule, value: string) {
      if (!value) {
        return new Error('Vui lòng nhập số điện thoại');
      } else if (!/^(0)(3[2-9]|5[2|6|8|9]|7[0|6-9]|8[0-9]|9[0-4|6-9])[0-9]{7}$/.test(value)) {
        return new Error('Định dạng số điện thoại không hợp lệ');
      }
      return true;
    },
    trigger: ['input', 'blur']
  },
  facebook: {
    required: true,
    validator(rule: FormItemRule, value: string) {
      if (!value) {
        return new Error('Vui lòng nhập link tài khoản facebook');
      } else if (!/^(?:https?:\/\/)?(?:www\.|m\.)?facebook\.com\/.*$/.test(value)) {
        return new Error('Định dạng không hợp lệ');
      }
      return true;
    },
    trigger: ['input', 'blur']
  },
  fileList: {
    required: true,
    validator(rule: FormItemRule, value: UploadFileInfo[]) {
      if (value.length == 0 && formValue.isFaceCheckin) {
        return new Error('Checkin khuôn mặt, ảnh là bắt buộc');
      }
      return true;
    },
    trigger: ['blur']
  }
};

const handleValidate = (e: MouseEvent) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      if (formValue.fileList.length > 0) {
        formValue.previewLink = URL.createObjectURL(formValue.fileList[0].file as File);
      }
      handleSignup();
    }else {
      message.error('Vui lòng điền đầy đủ thông tin trước khi tiếp tục.');
    }
  });
};

const handleSignup = async () => {
  loading.value = true;
  try {
    const userSignupRes = {
      id: '',
      fullName: formValue.fullName,
      email: formValue.email,
      generation: formValue.generation,
      phoneNumber: formValue.phoneNumber,
      facebook: formValue.facebook,
      image: formValue.image || 'default-image-url',
    };

    useStore.setUser({
      id: userSignupRes.id,
      fullName: userSignupRes.fullName,
      email: userSignupRes.email,
      generation: userSignupRes.generation,
      phoneNumber: userSignupRes.phoneNumber,
      facebook: userSignupRes.facebook,
      image: userSignupRes.image,
    });

    message.success('Bạn đã đăng ký thành công!');
    console.log('Đăng ký thành công');

    push('/signup/confirm');
  } catch (err: any) {
    const messageError = err?.response?.data?.message || err.message;
    message.error(messageError);
  } finally {
    loading.value = false;
  }
};


const generateNoteBank = () => {
  const unsignedName = formValue.fullName.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  return `${unsignedName} - K${formValue.generation} - Dong tien sinh nhat`;
};
onMounted(() => {
  formValue.fullName = userStore.fullName;
  formValue.email = userStore.email;
  formValue.generation = userStore.generation;
  formValue.phoneNumber = userStore.phoneNumber;
  formValue.facebook = userStore.facebook;
});
</script>

<template>
<div class="signup">
  <div class="left-body">
    <div class="logo">
      <a href="" @click="push('./')"><img src="@/assets/signup/logo.png" alt=""></a>
    </div>
    <h1>Hãy chia sẻ thông tin cá nhân để đăng ký</h1>
    <p>
      Cảm ơn sự quan tâm của bạn tới bữa tiệc sinh nhật của CLB Tiếng Anh V.I.P. Xin hãy cung cấp 
      thông tin cá nhân để hoàn tất việc đăng ký. 
    </p>
  </div>
  <div class="right">
    <div class="right-title">
      <h1>Chúc mừng V.I.P sinh nhật 13 tuổi</h1>
      <p>Cùng đăng ký để tham dự bữa tiệc sinh ngay thôi</p>
    </div>
    <div class="right-body">
      <n-form ref="formRef" :rules="rules" :model="formValue">
        <n-form-item label="Họ và tên" path="fullName" class="form-element">
          <n-input
            type="text"
            size="large"
            placeholder="Cao Đình Nhật"
            v-model:value="formValue.fullName"
            autocomplete="name"
          />
        </n-form-item>

        <n-form-item label="Khóa (khóa học tại trường)" path="generation" class="form-element">
            <n-select
              size="large"
              :options="options"
              placeholder="Chọn khóa"
              v-model:value="formValue.generation"
            />
        </n-form-item>

        <n-form-item label="Email" path="email" class="form-element">
          <n-input
            type="email"
            autocomplete="email"
            size="large"
            placeholder="nhatbeo2003@gmail.com"
            v-model:value="formValue.email"
          />
        </n-form-item>

        <n-form-item label="Số điện thoại" path="phoneNumber" class="form-element">
          <n-input
            type="tel"
            autocomplete="tel"
            size="large"
            placeholder="0999999999"
            v-model:value="formValue.phoneNumber"
          />
        </n-form-item>

        <n-form-item label="Link facebook" path="facebook" class="form-element">
          <n-input
            type="url"
            size="large"
            placeholder="https://www.facebook.com/Nhatinsane"
            v-model:value="formValue.facebook"
            autocomplete="url"
          />
        </n-form-item>

        <n-form-item
          path="fileList"
          class="form-element"
          :show-label="false"
        >
          <n-space vertical>
            <n-tooltip trigger="hover">
              <template #trigger>
                <n-checkbox
                  size="large"
                  label="Checkin bằng khuôn mặt"
                  v-model:checked="formValue.isFaceCheckin"
                />
              </template>
              Hãy chọn bức ảnh sắc nét nhất trong máy bạn để check in nhé 3
            </n-tooltip>
            <n-upload
              v-if="formValue.isFaceCheckin"
              v-model:file-list="formValue.fileList"
              directory-dnd
              accept="image/*"
              :max="1"
            >
              <n-upload-dragger>
                <div style="margin-bottom: 12px">
                  <n-icon size="30" :depth="3">
                    <IconUpload></IconUpload>
                  </n-icon>
                </div>
                <n-text style="font-size: 14px">
                  Kéo thả ảnh hoặc <span style="color: #007aff">tải lên</span>
                </n-text>
              </n-upload-dragger>
            </n-upload>
          </n-space>
        </n-form-item>
        <button class="btn btn-primary"  @click="handleValidate" :disabled="loading">
          <n-spin v-if="loading" />  
        Đăng ký ngay</button>
      </n-form>  
    </div>
  </div>
  <img src="@/assets/img/cloud.png" alt="" class="cloud">
  <img src="@/assets/img/birthday.png" alt="" class="birthday">
</div>
</template>
<style scoped lang="scss">
@import '@styles/_mixins.scss';
.signup{
    display: flex;   
    box-sizing: border-box; 
    position: relative;
    // height: 100vh;
    @include mobile{
        display: flex;
        flex-direction: column;
    }
}
.left-body{
    color: #fff;
    background: linear-gradient(to right,  #6ea3f1,#4c85db);
    width: calc(50% - 100px);
    // height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 50px;
    @include mobile{
      width: 100%;
      padding: 20px 20px;
    }
    .logo{
        display: flex;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        background: #fff;
        border: 3px solid #0077fe;
    }
    img{
        width: 120px;
        height: 120px;
        object-fit: contain;
        border-radius: 50%;
    }
    h1{
        font-size: 36px;
        width: 70%;
        line-height: 1.2;
    }
    p{
        width: 70%;
        font-size: 18px;
    }
}

.right{
    width: calc(50% - 40px);
    margin: 20px;
    flex-grow: 1;
    @include mobile{
      width: 100%;
    }
    h1{
        font-size: 40px;
        width: 80%;
        margin-left: 20px;
        text-align: center;
        line-height: 1.2;
    }
    p{
        font-size: 18px;
        text-align: center;
        line-height: 1.4;
    }
}
.btn{
    display: block;
    margin: 0 auto;
    width: 70%;
    padding: 15px 20px;
    border-radius: 999px;
    border: none;
    background: #398ae7;
    color: #fff;
    font-size: 18px;
}
.cloud{
    width: 10%;
    height: 100%;
    position: absolute;
    right: 49%;
    @include mobile{
      display: none;
    }
}
.birthday{
    width: 30%;
    bottom: 0;
    right: 50%;
    position: absolute;
    @include mobile{
      display: none;
    }
}

</style>
<route lang="yaml">
  name: Signup
  meta:
    layout: blank
  </route>