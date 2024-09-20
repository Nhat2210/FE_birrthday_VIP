<script lang="ts" setup>
import { useRouter } from 'vue-router';
const { push } = useRouter();
const handleButton = () => {
  push('/renewQR2');
}
</script>
<template>
    <div class="wrapper">

      <n-tooltip trigger="hover" style="cursor: pointer;"  @click="handleButton()">
          <template #trigger >
            <n-button 
            @click="handleButton()"
            id="supporter"
            >
                <i class="fa-solid fa-qrcode"></i>
            </n-button>
          </template>
          Cấp lại mã QR
      </n-tooltip>
    </div>
  </template>
    

  <style lang="scss" scoped>
  @import '@styles/_mixins.scss';
  img{
    width: 100%;
  }
  #supporter {
    z-index: 9999;
    position: fixed;
    right: 1.5%;
    top: 40%;
    transform-origin: bottom center;
    transform: translate(0, -100%) rotateZ(-90deg) translateY(150%);
    cursor: pointer;
    z-index: 99;
    background: rgba(147, 177, 240, 0.75);
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
    @include mobile{
      right: 5%;
    }
  }
  #supporter:hover{
    background: rgba(80, 131, 241, 0.75);
  }

  </style>