<script lang="ts" setup>
import { useRouter } from 'vue-router';
import QRCodeVue3 from 'qrcode-vue3';
const { push } = useRouter();
const message = useMessage();
import { copy } from 'v-copy'
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
          <img src="@/assets/img/fb.png" alt="">
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
                        v-copy="11111111"
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
        <button class="btn-return" @click="push('./confirm')">Quay lại</button>
        <button class="btn-continue" @click="push('/signup/complete')">Tiếp tục</button>
    </div>
  </div>
  <img src="@/assets/img/cloud.png" alt="" class="cloud">
  <img src="@/assets/img/birthday.png" alt="" class="birthday">
</div>
</template>
<style lang="scss" scoped>
@import './qr.scss';
</style>