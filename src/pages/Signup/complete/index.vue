<script setup lang="ts">
import { useRouter } from 'vue-router';
import QRCodeVue3 from 'qrcode-vue3';
import { useUserStore } from '@/stores/user';
const useStore = useUserStore();
const userId = useStore.id;
const { push } = useRouter();
const message = useMessage();
const qrCodeRef = ref(null); 
import { toPng } from 'html-to-image';

const downloadQR = async () => {
  const qrElement = qrCodeRef.value?.$el;
  if (qrElement) {
    toPng(qrElement)
      .then((dataUrl) => {
        const downloadLink = document.createElement('a');
        downloadLink.href = dataUrl;
        downloadLink.download = `qr-code-${userId}.png`;
        downloadLink.click();
      })
      .catch((error) => {
        console.error('Lỗi khi tải xuống mã QR', error);
        message.error('Lỗi khi tải xuống mã QR');
      });
  } else {
    message.error('QR Code không tồn tại');
  }
};

</script>

<template>
  <div class="signup">
    <div class="left-body">
      <div class="logo">
        <a href="" @click="push('/')">
          <img src="@/assets/signup/logo.png" alt="logo">
        </a>
      </div>
      <h1>Mã QR Checkin</h1>
      <p>Bạn đã đăng ký thành công!</p>
      <p>Trung tâm tiệc cưới Venus, 39 Đ. Cầu Diễn, Phúc Diễn, Bắc Từ Liêm, Hà Nội</p>
      <p>Thứ bảy ngày 5 tháng 10 năm 2024</p>
    </div>
    
    <div class="right">
      <div class="right-body">
        <div class="frame-qr">
          <div class="qr" v-if="userId" style="display: flex; border-radius: 15px;">
            <QRCodeVue3
              ref="qrCodeRef"
              :value="userId"
              :width="200"
              :height="200"
              fileExt="png"
              :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
              :dotsOptions="{ type: 'square', color: '#05004d' }"
              :cornersSquareOptions="{ type: 'square', color: '#0e013c' }"
              :style="{ 'border-radius': '15px' }"
            />
          </div>
          <div class="qr-placeholder" style="width: 200px; height: 200px; display: flex; align-items: center; justify-content: center; border: 3px solid #71a0f2; border-radius: 15px;" v-else>
            <div style="border-radius: 15px;">
              <p>No QR Code</p>
            </div>
          </div>
        </div>
        <p>Đây là mã QR của bạn</p>
        <p style="width: 60%; text-align: center;">Bạn vui lòng lưu lại để checkin tại buổi sinh nhật của V.I.P</p>
        <p class="warning" style="width: 70%; text-align: center;">Lưu ý: Website hoạt động tốt nhất trên trình duyệt Chrome, Edge cho chức năng tải xuống ảnh QR.</p>
      </div>
      
      <div class="button">
        <button class="btn-return btn" @click="push('/signup/qr')">Quay lại</button>
        <button class="btn-downloadQr btn" @click="downloadQR">Tải mã QR</button>
        <button class="btn-mainpage btn" @click="push('/')">Trang chủ</button>
      </div>
    </div>

    <img src="@/assets/img/cloud.png" alt="cloud" class="cloud">
    <img src="@/assets/img/birthday.png" alt="birthday" class="birthday">
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
    }
    .qr {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 4px solid #6ea3f1; 
      border-radius: 15px; 
      width: 200px; 
      height: 200px; 
      overflow: hidden; 
      margin-bottom: 20px;
      
      canvas {
          border-radius: 15px; 
      }
  }

    .right-body {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .avatar {
        width: 200px;
        height: 200px;
        border-radius: 15px;
        border: 4px solid #6ea3f1;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px; 
        cursor: pointer;
        img {
            width: 200px;
            height: 200px;
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
        padding: 15px 35px;
        margin-left: 20px;
        border: none;
        border-radius: 999px;
        @include mobile{
          padding: 12px 20px;
          font-size: 12px;
          margin-left: 0;
          margin-bottom: 20px;
          margin-right: 15px;
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