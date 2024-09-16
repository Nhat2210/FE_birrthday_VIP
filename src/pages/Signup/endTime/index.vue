<script setup lang="ts">
import { useRouter } from 'vue-router';
import QRCodeVue3 from 'qrcode-vue3';
import { useUserStore } from '@/stores/user';
const useStore = useUserStore();
const userData = useStore.$state;
const { push } = useRouter();
const message = useMessage();
const userId = userData.fullName;
</script>

<template>
<div class="signup">
  <div class="left-body">
    <div class="logo">
      <a href="" @click="push('/')"><img src="@/assets/signup/logo.png" alt=""></a>
    </div>
    <h1>Thời gian đăng ký đã chính thức kết thúc</h1>
  </div>
  <div class="right">
    <div class="right-body">
        <h1>Chúc mừng V.I.P sinh nhật 13 tuổi</h1>
        <p class="warning">Đăng ký tham gia sinh nhật đã kết thúc. <br>
            Mọi thắc mắc vui lòng liên hệ fanpage.</p>
        <p>Xin hẹn gặp bạn trong những sự kiện sắp tới của V.I.P nhé!</p>
    </div>
    <div class="button">
        <button class="btn-downloadQr btn"><a target="_blank" href="https://www.facebook.com/clbtienganhV.I.P.haui?locale=vi_VN">Đi tới fanpage</a></button>
        <button class="btn-mainpage btn" @click="push('/')">Trang chủ</button>
    </div>
  </div>
  <img src="@/assets/img/cloud.png" alt="" class="cloud">
  <img src="@/assets/img/birthday.png" alt="" class="birthday">
</div>
</template>
<style scoped lang="scss">
@import './endTime.scss';
</style>