<script lang="ts" setup>
import { useRouter } from 'vue-router';
import QRCodeVue3 from 'qrcode-vue3';
const { push } = useRouter();
const message = useMessage();
import { useUserStore } from '@/stores/user';
const useStore = useUserStore();
const userData = useStore.$state;
import { copy } from 'v-copy'
</script>

<template>
<div class="signup">
  <div class="left-body">
    <div class="logo">
      <a href="" @click="push('/')"><img src="@/assets/signup/logo.png" alt=""></a>
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
            <p> - {{ userData.fullName || 'Ho va ten' }} - Dong tien sinh nhat</p>
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
@import '@styles/_mixins.scss';
.signup {
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
      padding: 20px;
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
    }
    .right-body {
        display: flex;
        flex-direction: column;
        align-items: center;
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
            border-radius: 15px;
        }
    }
    p{
        font-size: 18px;
        padding: 0;
        margin: 10px;
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
        margin-top: 50px;
        cursor: pointer;
        font-size: 18px;
        font-weight: 600;
        padding: 17px 70px;
        margin-left: 20px;
        border: none;
        border-radius: 999px;
        @include mobile{
          padding: 13px 25px;
          font-size: 12px;
          margin-right: 25px;
        }
    }
    .btn-continue{
        background: #6ea3f1;
        color: #fff;
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
    right: 50%;
    position: absolute;
    @include mobile{
      display: none;
    }
}
</style>