<script setup lang="ts">
import { useBreakpoints } from '@/hooks/useBreakpoints';

import logo from '@/assets/signup/logo.png';
const { push } = useRouter();

const { width, type: device } = useBreakpoints();
const showSupportDrawer = ref<boolean>(false);
const showQrBank = ref<boolean>(false);

const toggleSupportDrawer = () => {
    showSupportDrawer.value = !showSupportDrawer.value;
};

</script>

<template>
    <button @click="toggleSupportDrawer" :class="{ active: showSupportDrawer}" id="supporter">Cấp lại QR</button>     
    
    <n-drawer v-model:show="showSupportDrawer" :width="300" placement="right" :z-index="90" resizable>
        <n-drawer-content>
            <n-space :wrap="false" align="center">
                <n-avatar round :size="50" :src="logo">
                    <h2>CLB Tiếng Anh VIP</h2>
                </n-avatar>
            </n-space>
            <n-space vertical style="margin-top: 3rem">
            <n-button
                :builtin-theme-overrides="{
                    color: '#D1E9F6',
                    textColor: 'white',
                    colorHover: 'white',
                    textColorHover: '#5B99C2',
                    colorFocus: '#D1E9F6',
                    textColorFocus: 'white'
                }"
                size="large"
                @click="push({ name: 'Renew-QR', params: {} })"
                >
                Lấy lại mã QR checkin
            </n-button>
            <n-button
                :builtin-theme-overrides="{
                    color: '#D1E9F6',
                    textColor: 'white',
                    colorHover: 'white',
                    textColorHover: '#5B99C2',
                    colorFocus: '#D1E9F6',
                    textColorFocus: 'white'
                }"
                size="large"
                @click="showQrBank = true"
                >
                Mã QR chuyển khoản
            </n-button>
        </n-space>
        </n-drawer-content>
    </n-drawer>

    <n-modal v-model:show="showQrBank" class="qr-bank-modal">
        <template>
            <div class="border-gradient">
                <img class="qr-bank" src="@/assets/signup/logo.png" alt="">
            </div>
            <div class="text">
                <p>Chủ tài khoản: ABC</p>
                <p style="margin-top: 10px">Ngân hàng: ABC</p>
                <p style="margin-top: 10px">STK: xyz</p>
                <p>Với kinh phí đóng về CLB là 300.000đ mỗi người, hãy quét mã QR sau với nội dung:</p>
                <p>Họ tên + Khóa + "đóng tiền sinh nhật"</p>
            </div>
            <n-button
                @click="showQrBank = false"
                size="large"
                :builtin-theme-overrides="{
                color: '#f47b2a',
                textColor: 'white',
                colorHover: 'white',
                textColorHover: '#f47b2a',
                colorFocus: '#f47b2a',
                textColorFocus: 'white'
                }"
            >
                Đóng
            </n-button>
        </template>
    </n-modal>    
</template>

<style scoped lang="scss">
@import '@styles/mixins';

#supporter {
  position: fixed;
  right: 0;
  top: 50%;
  transform-origin: bottom center;
  transform: translate(0, -100%) rotateZ(-90deg) translateY(150%);
  cursor: pointer;
  z-index: 99;
  background: rgba(101, 144, 235, 0.75);
  color: white;
  padding: 1rem 2rem;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  outline: none;
  appearance: none;
  border: none;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: rgba(101, 144, 235, 0.75);
  }

  &.active {
    transform: translate(0, -100%) rotateZ(-90deg) translateY(calc(150% - 29.7rem));
  }
}

.qr-bank{
    object-fit: cover;
    &img{
        width: 10%;
    }
}
.qr-bank-modal {
    width: 500px;
    height: 400px;
    background: white;
    padding: 4rem;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  .border-gradient {
    display: inline-block;
    width: 230px;
    height: 230px;
    border: solid 5px transparent;
    border-radius: 32px;
    overflow: hidden;
    background-clip: content-box, border-box;
    background-origin: border-box;
    background-image: linear-gradient(white, white),
      linear-gradient(90deg, rgba(253, 200, 48, 1) 0%, rgba(243, 115, 53, 1) 100%);

    &  img {
      width: 230px;
      height: 230px;
      object-fit: cover;
    }
  }

  .text {
    text-align: center;
    font-size: 20px;
  }
}
</style>