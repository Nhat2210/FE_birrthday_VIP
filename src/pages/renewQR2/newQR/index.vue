<script setup lang="ts">
import { IconUserFilled, IconBriefcase, IconMail, IconPhone, IconBrandFacebook } from '@tabler/icons-vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
const { push } = useRouter();
const useStore = useUserStore();
const userData = useStore.$state;
const route = useRoute();
const imageUrl = ref(route.query.imageUrl as string || '@/assets/img/cat.png');
const picture = "https://api.viphaui.com/" + userData.image;
const handleDownloadQR = () => {
  const el: HTMLElement = document.querySelector('.btn-hide')!;
  el.click();
};
</script>
<template>
<div class="signup">
  <div class="left-body">
    <div class="logo">
      <a href="/"><img src="@/assets/signup/logo.png" alt=""></a>
    </div>
    <h1>Xác nhận thông tin cá nhân để  đăng ký</h1>
    <p>
        Cảm ơn bạn đã chia sẻ thông tin cá nhân quan trọng. Vui lòng xác nhận rằng thông tin dưới đây là chính xác để hoàn tất quá trình đăng ký
    </p>
  </div>
  <div class="right">
    <div class="right-body">
      <h1>Xin chào anh/chị</h1>
      <p>Cảm ơn anh/chị đã tham dự buổi tiệc sinh nhật cùng CLB Tin học V.I.P</p>
      <div class="avatar">
        <img src="@/assets/img/fb.png" alt="">
      </div>
      <p>CLB xin trân trọng cảm ơn !</p>
    </div>
    <div class="button">
        <button class="btn-return" @click="push('./')"> <i class="fa-solid fa-backward"></i>Quay lại</button>
        <button class="btn-download" @click="handleDownloadQR()"><i class="fa-solid fa-download"></i>Tiếp tục</button>
    </div>

  </div>
  <img src="@/assets/img/cloud.png" alt="" class="cloud">
  <img src="@/assets/img/birthday.png" alt="" class="birthday">
</div>
</template>
<style scoped lang="scss">
@import './renew.scss';
.btn-continue:hover{
  background-color: #6393dc;
  color: #f3f3f3;
  cursor: pointer;
}
</style>