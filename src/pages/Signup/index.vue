<script setup lang="ts">
import type { UploadFileInfo } from 'naive-ui';
import type { FormInst, FormItemRule, SelectOption } from 'naive-ui';
import { required } from '@vuelidate/validators';
import { api } from '@/api/axios';
import { useMessage } from 'naive-ui';
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

const options: SelectOption[] = Array.from(Array(13).keys()).reduce(
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
  const uploadedFile = user.fileList[0]; // Lấy file đầu tiên trong danh sách
  if (uploadedFile) {
    formData.append('image', user.fileList[0]!.file as File);
    console.log('Uploaded file:', uploadedFile);
    // Bạn có thể truy cập các thuộc tính của file, ví dụ:
    console.log('File name:', uploadedFile.name);
    //console.log('File URL:', uploadedFile.url);
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
      } else if (!/^[a-zA-Z0-9](\.?[a-zA-Z0-9]){5,}@g(oogle)?mail\.com$/.test(value)) {
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
    }
  });
};
const handleSignup = async () => {
  loading.value = true;
  try {
    const { data } = await signup(formValue);
    
    console.log(data)
    const userSignupRes = data.data
    useStore.setUser({
      fullName: userSignupRes.fullName,
      email: userSignupRes.email,
      generation: userSignupRes.generation,
      phoneNumber: userSignupRes.phoneNumber,
      facebook: userSignupRes.facebook,
      image: userSignupRes.image,
         }
    )
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

        <n-form-item label="Khóa" path="generation" class="form-element">
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
        <button class="btn btn-primary"  @click="handleSignup()">Đăng ký ngay</button>
      </n-form>  
    </div>
  </div>
  <img src="@/assets/img/cloud.png" alt="" class="cloud">
  <img src="@/assets/img/birthday.png" alt="" class="birthday">
</div>
</template>
<style scoped>
@import './signup.scss';
</style>
<route lang="yaml">
  name: Signup
  meta:
    layout: blank
  </route>