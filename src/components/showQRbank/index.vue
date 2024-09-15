<template>
  <div class="wrapper">
    
  <n-tooltip trigger="hover" @click="showModal = true"
  style="cursor: pointer;">
    <template #trigger>
      <n-button 
        @click="showModal = true"
        id="supporter"
        >
        <i class="fa-solid fa-money-bill"></i>
      </n-button>
    </template>
    Thanh toán QR.
  </n-tooltip>
    <n-modal v-model:show="showModal"
    >
      <n-card
        style="width: 800px; height: 550px ; border-radius: 15px"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
      <div class="content">
        <div class="image">
          <img src="@/assets/img/fb.png" alt="ảnh qr ở đây">
        </div>
        <p>Chủ tài khoản: Nguyễn Thị Hường</p>
        <p>Ngân hàng: VietcomBank</p>
        <p>Số tài khoản: 0999999999</p>
        <p>Với kinh phí đóng về CLB là 300.000đ mỗi người, hãy quét mã QR sau với nội dung:</p>
        <p>Họ tên + Khóa + "đóng tiền sinh nhật"</p>
        <button @click="showModal=false">Đóng</button>
      </div>
      </n-card>
    </n-modal>
  </div>
</template>
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  
  export default defineComponent({
    setup() {
      return {
        showModal: ref(false)
      }
    }
  })
  </script>
<style scoped>
img{
  width: 100%;
}
#supporter {
  z-index: 9999;
  position: fixed;
  right: 1.9%;
  top: 50%;
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
}
#supporter:hover{
  background: rgba(80, 131, 241, 0.75);
}
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  .image{
    text-align: center;
    width: 200px;
    border-radius: 15px;
    border: 2px solid #6ea3f1;
    margin-bottom: 20px;
    img{
    width: 100%;
    border-radius: 15px;
  }
  }
  p{
    margin: 5px;
    font-size: 16px;
    text-align: center;
    width: 90%;
    line-height: 1;
  }
  p:nth-child(4){
    margin-bottom: 20px;
  }
  button{
    margin-top: 20px;
    padding: 12px 50px;
    border: none;
    background: #6ea3f1;
    color: #fff;
    border-radius: 999px;
  }
}
</style>