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
    <h1>Mã QR Checkin</h1>
    <p>
      Bạn đã đăng ký thành công!
    </p>
    <p> Trung tâm tiệc cưới Venus, 39 Đ. Cầu Diễn, Phúc Diễn, Bắc Từ Liêm, Hà Nội</p>
    <p>Thứ bảy ngày 10 tháng 10 năm 2024</p>
  </div>
  <div class="right">
    <div class="right-body">
        <div class="avatar">
            <div class="qr" v-if="userId">
              <QRCodeVue3
                :value="userId"
                :width="200"
                :height="200"
                :qrOptions="{ typeNumber: '0', mode: 'Byte', errorCorrectionLevel: 'Q' }"
                :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
                :dotsOptions="{ type: 'square', color: '#05004d' }"
                :cornersSquareOptions="{ type: 'square', color: '#0e013c' }"
              />
            </div>

            <div class="qr-placeholder" v-else>
              <div style="width: 200px; height: 200px; background-color: #f0f0f0; display: flex; align-items: center; justify-content: center; border-radius: 15px;">
                <p>No QR Code</p>
              </div>
            </div>
        </div>
        <p>Đây là mã QR của bạn</p>
        <p style="width: 60%; text-align: center;">Bạn vui lòng lưu lại để checkin tại buổi sinh nhật của V.I.P</p>
        <p class="warning" style="width: 70%; text-align: center;">Lưu ý: Website hoạt động tốt nhất trên trình duyệt chrome, edge cho chức năng tải xuống ảnh QR.</p>
    </div>
    <div class="button">
        <button class="btn-return btn" @click="push('/signup/confirm')">Quay lại</button>
        <button class="btn-downloadQr btn" @click="push('/signup/complete')">Tải mã QR</button>
        <button class="btn-mainpage btn" @click="push('/')">Trang chủ</button>
    </div>
  </div>
  <img src="@/assets/img/cloud.png" alt="" class="cloud">
  <img src="@/assets/img/birthday.png" alt="" class="birthday">
</div>
</template>
<style scoped lang="scss">
@import './complete.scss';
</style>