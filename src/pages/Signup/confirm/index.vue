<script setup lang="ts">
import { IconUserFilled, IconBriefcase, IconMail, IconPhone, IconBrandFacebook } from '@tabler/icons-vue';
import { useRouter } from 'vue-router';
import QRCodeVue3 from 'qrcode-vue3';
import { useUserStore } from '@/stores/user';
const { push } = useRouter();
const useStore = useUserStore();
const userData = useStore.$state;
const route = useRoute();
const imageUrl = ref(route.query.imageUrl as string || '@/assets/img/cat.png');
const picture = "https://api.viphaui.com/" + userData.image;
</script>
<template>
<div class="signup">
  <div class="left-body">
    <div class="logo">
      <a href="" @click="push('/')"><img src="@/assets/signup/logo.png" alt=""></a>
    </div>
    <h1>Xác nhận thông tin cá nhân để  đăng ký</h1>
    <p>
        Cảm ơn bạn đã chia sẻ thông tin cá nhân quan trọng. Vui lòng xác nhận rằng thông tin dưới đây là chính xác để hoàn tất quá trình đăng ký
    </p>
  </div>
  <div class="right">
    <div class="right-body">
        <div class="avatar">
          <img :src="picture" alt="">
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
          <div class="phoneNumber tt ">
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
        <button class="btn-continue" @click="push('/signup/qr')">Tiếp tục</button>
    </div>

  </div>
  <img src="@/assets/img/cloud.png" alt="" class="cloud">
  <img src="@/assets/img/birthday.png" alt="" class="birthday">
</div>
</template>
<style scoped lang="scss">
@import './confirm.scss';
.btn-continue:hover{
  background-color: #6393dc;
  color: #f3f3f3;
  cursor: pointer;
}
</style>