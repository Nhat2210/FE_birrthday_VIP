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
      <a href="" @click="push('./')"><img src="@/assets/signup/logo.png" alt=""></a>
    </div>
    <h1>Phương thức chuyển khoản</h1>
    <p>
        Bạn vui lòng chuyển khoản để hoàn tất đăng ký nhé!
    </p>
  </div>
  <div class="right">
    <div class="right-body">
        <div class="avatar">
          <!-- <img src="@/assets/img/cat.png" alt=""> -->
          <!-- <QRCodeVue3
              :width="220"
              :height="220"
              image="@/assets/img/fb.png"
              :value="userData.fullName"
              fileExt="png"
              :dotsOptions="{
                type: 'square'
              }"
              :cornersSquareOptions="{ type: 'square', color: '#000000' }"
              download
              download-button="btn-hide"
              :download-options="{
                name: `QR_VIP_${userData.fullName}`
              }"
            /> -->
            <div class="hello">
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
        </div>
        <p>Chủ tài khoản</p>
        <p>Ngân hàng</p>
        <div class="p_copy">
            <p class="stk_copy">STK: 000000000
                <span>
                    <n-button
                        strong
                        secondary
                        circle
                        type="primary"
                        v-copy="1111111111"
                        @click="message.success('Sao chép vào bộ nhớ tạm thành công')"
                    ></n-button>
                    <i class="fa-regular fa-clipboard" v-copy="1111111111" @click="message.success('Sao chép vào bộ nhớ tạm thành công')"></i>
                </span>
            </p>
        </div>
        <p style="width: 70%;">Với kinh phí đóng về CLB là 300.000đ mỗi người hãy quét mã QR sau với nội dung nội dung:</p>
        <div class="p_copy">
            <p> - Knull - Dong tien sinh nhat</p>
            <span>
                    <n-button
                        strong
                        secondary
                        circle
                        type="primary"
                        v-copy="1111111111"
                        @click="message.success('Sao chép vào bộ nhớ tạm thành công')"
                    ></n-button>
                    <i class="fa-regular fa-clipboard" v-copy="1111111111" @click="message.success('Sao chép vào bộ nhớ tạm thành công')"></i>
                </span>
        </div>
    </div>
    <div class="button">
        <button class="btn-return" @click="push('./signup/confirm')">Quay lại</button>
        <button class="btn-downloadQr" @click="push('/signup/complete')">Tải mã QR</button>
        <button class="btn-mainpage" @click="push('/')">Trang chủ</button>
    </div>
  </div>
  <img src="@/assets/img/cloud.png" alt="" class="cloud">
  <img src="@/assets/img/birthday.png" alt="" class="birthday">
</div>
</template>
<style scoped lang="scss">
@import './complete.scss';
</style>