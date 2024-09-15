<script setup lang="ts">
import type { FormInst } from 'naive-ui';
import { renewQR } from '@/api/user.api';
import { useUserStore } from '@/stores/user';
import vueRecaptcha from 'vue3-recaptcha2';
import QRCodeVue3 from 'qrcode-vue3';
const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const recaptchaRef = ref<any>();
const formQrRef = ref<FormInst | null>(null);
const formQR = reactive<{ q: string; recaptcha: string }>({
  q: '',
  recaptcha: ''
});
const loading = ref<boolean>(false);
const { push } = useRouter();
const rules = {
  q: {
    required: true,
    message: 'Trường này không được trống',
    trigger: ['input', 'blur']
  },
  recaptcha: {
    required: true,
    message: 'Captcha không được trống',
    trigger: ['input', 'blur']
  }
};
const recaptchaVerified = (response: string) => {
  formQR.recaptcha = response;
};

const recaptchaFailed = () => {
  message.error('Có lỗi khi tải captcha, vui lòng thử lại');
};

const recaptchaError = (reason: Error) => {
  message.error('Có lỗi khi tải captcha, vui lòng thử lại');
};

const recaptchaExpired = () => {
  formQR.recaptcha = '';
};
const message = useMessage();

const useStore = useUserStore();
const userData = useStore.$state;
const route = useRoute();
const imageUrl = ref(route.query.imageUrl as string || '@/assets/img/cat.png');
const user = ref<{ id: string; fullName: string }>({ id: '', fullName: '' });
const picture = "https://api.viphaui.com/" + userData.image;

const handleRenew = () => {
  formQrRef.value?.validate((errors) => {
    if (!errors) {
      loading.value = true;
      renewQR(toRaw(formQR.q))
        .then(({ data }) => {
          user.value.id = data.data.user.id;
          user.value.fullName = data.data.user.fullName;
          push('/renew2/newQR');  
        })
        .catch((error) => {
          console.error(error);
          message.error('Có lỗi xảy ra');
        })
        .finally(() => {
          loading.value = false;
        });
    }
  });
};
console.log("123")
const handleDownloadQR = () => {
  const el: HTMLElement = document.querySelector('.btn-hide')!;
  el.click();
};
</script>
<template>
<div class="signup">
  <div class="left-body">
    <div class="logo">
      <img src="@/assets/signup/logo.png" alt="">
    </div>
    <h1>Trang cấp lại mã QRCode</h1>
    <p>
        Cảm ơn bạn đã chia sẻ thông tin cá nhân quan trọng. Vui lòng xác nhận rằng thông tin dưới đây là chính xác để được cấp lại mã QRCode
    </p>
  </div>
  <div class="right">
    <div class="right-body">
        <h1 class="right-body_title">Chào mừng anh/chị!</h1>
        <p class="right-body_content">Anh/chị vui lòng điền chính xác thông tin bên dưới.</p>
        <p class="right-body_warning">Lưu ý: Website hoạt động tốt nhất trên trình duyệt chrome, edge cho chức năng tải xuống ảnh QR.</p>
        <n-form ref="formQrRef" :rules="rules" :model="formQR" class="form">
          <n-form-item label="Nhập email hoặc số điện thoại" path="q" class="form_label">
            <n-input
              class="form_input"
              type="text"
              size="large"
              placeholder="nhatcutegk3@gmail.com/0999999999"
              v-model:value="formQR.q"
            />
          </n-form-item>

          <n-form-item label="Captcha" path="recaptcha" class="form-element">
            <vue-recaptcha
              v-show="true"
              :sitekey="SITE_KEY"
              size="normal"
              theme="light"
              hl="en"
              :loading-timeout="2000"
              @expire="recaptchaExpired"
              @verify="recaptchaVerified"
              @fail="recaptchaFailed"
              @error="recaptchaError"
              ref="recaptchaRef"
            ></vue-recaptcha>
          </n-form-item>
        </n-form>
        <!-- start captcha here -->

        <!-- end captcha -->
        <animateButton @click="handleRenew()">
          <i class="fa-solid fa-qrcode"></i>
          <v-slot>Cấp lại</v-slot>
        </animateButton>
      </div>
  </div>
  <img src="@/assets/img/cloud.png" alt="" class="cloud">
  <img src="@/assets/img/birthday.png" alt="" class="birthday">
</div>
</template>
<style scoped lang="scss">
@import './renewQR.scss';
</style>