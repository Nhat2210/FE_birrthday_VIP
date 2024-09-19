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
@import '@styles/_mixins.scss';
.signup {
    height: 100vh;
    display: flex;
    box-sizing: border-box;
    position: relative;
    @include mobile{
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
    padding: 50px;
    @include mobile{
      width: 100%;
      padding: 20px 20px;
    }
    .logo {
        border-radius: 50%;
        width: 120px;
        height: 120px;
        background: #fff;
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
    @include mobile{
      width: 100%;
      text-align: center;
    }
    .right-body {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1{
            font-size: 40px;
            text-align: center;
            font-weight: bold;
            @include mobile{
              font-size: 30px;
              width: 90%;
              text-align: center;
            }
        }
        .warning{
            color: #f47b2a;
            font-size: 25px;
            font-weight: bold;
            @include mobile{
              font-size: 18px;
            }
        }
    }
    
    .avatar {
        width: 200px;
        border-radius: 15px;
        border: 4px solid #6ea3f1;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px; 
        cursor: pointer;
        
        img {
            width: 100%;
            display: block;
        }
    }
    p{
        font-size: 18px;
        padding: 0;
        margin: 10px;
        @include mobile{
          font-size: 14px;
          width: 80%;
        }
    }
    .p_copy{
        .stk_copy{
            display: flex;
            align-items: center;
            gap: 10px;
        }
        span{
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        i{
            position: absolute;
            font-size: 16px;
        }
    }
}


.button{
    display: flex;
    justify-content: center;
    button{
        margin-top: 100px;
        cursor: pointer;
        font-size: 18px;
        font-weight: 600;
        padding: 15px 35px;
        margin-left: 20px;
        border: none;
        border-radius: 999px;
        @include mobile{
          margin-top: 30px;
          padding: 12px 20px;
          font-size: 12px;
          margin-left: 0;
          margin-bottom: 20px;
          margin-right: 25px;
        }
    }
    .btn-mainpage{
        background: #6ea3f1;
        color: #fff;
    }
    .btn-mainpage:hover{
        background: #5a95ed;
        color: #fff;
    }
    a{
        text-decoration: none;
        color: #000;
    }
    a:hover{
        color: #fff;
    }
    .btn-downloadQr:hover a{
        color :#fff;
    }
    .btn-downloadQr:hover{
        background: #6ea3f1;
        color: #fff;
    }
    .btn-downloadQr{
        border: 1px solid #6ea3f1;
        background: #fff;
    }
}
.p_copy:last-child{
    display: flex;
    font-size: 16px;
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
    width: 25%;
    bottom: 0;
    right: 45%;
    position: absolute;
    @include mobile{
      display: none;
    }
}
</style>