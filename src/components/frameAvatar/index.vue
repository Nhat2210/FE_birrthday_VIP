<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import VueCropper from 'vue-cropperjs';
  import 'cropperjs/dist/cropper.css';
  import frameImage from '@/assets/img/frame.png';
  export default defineComponent({
    components: {
      VueCropper
    },
    setup() {
      const showModal = ref(false);
      const image = ref<string | null>(null);
      const cropperRef = ref<InstanceType<typeof VueCropper> | null>(null);
      const croppedImage = ref<string | null>(null);
      const downloadUrl = ref<string | null>(null);
  
      const onFileChange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];

        // Giải phóng URL của ảnh cũ nếu tồn tại
        if (image.value) {
          URL.revokeObjectURL(image.value); // Giải phóng bộ nhớ URL
        }

        // Reset cropper khi có file mới
        if (cropperRef.value) {
          cropperRef.value.clear(); // Xóa vùng crop trước đó
        }

        // Tạo URL mới cho ảnh được chọn và cập nhật
        image.value = URL.createObjectURL(file); // Cập nhật ảnh mới
      }
    };



  
      const cropImage = () => {
        if (cropperRef.value) {
          const croppedCanvas = cropperRef.value.getCroppedCanvas();
          croppedImage.value = croppedCanvas.toDataURL()
        }
      };
      const downloadImage = () => {
  if (croppedImage.value) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (!context) return;

    const croppedImg = new Image();
    const frameImg = new Image();

    croppedImg.src = croppedImage.value;
    frameImg.src = frameImage;

    canvas.width = 900;
    canvas.height = 900;

    // Sử dụng Promise để đảm bảo cả hai ảnh được tải xong
    const loadImage = (img: HTMLImageElement): Promise<void> => {
      return new Promise((resolve) => {
        img.onload = () => resolve();
      });
    };

    Promise.all([loadImage(croppedImg), loadImage(frameImg)]).then(() => {
      // Vẽ ảnh đã crop trước
      context.drawImage(croppedImg, 0, 0, canvas.width, canvas.height);

      // Sau đó vẽ ảnh khung lên
      context.drawImage(frameImg, 0, 0, canvas.width, canvas.height);

      // Tạo link download
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'frame-13th-birthday-vip.png';
      link.click();
    });
  }
};
const safeKey = () => image.value || '';

      return {
        showModal,
        image,
        cropperRef,
        onFileChange,
        cropImage,
        croppedImage,
        downloadImage,
        safeKey
      };
    }
  });

  </script>
  
  <template>
    <div class="wrapper">
      <n-tooltip trigger="hover" style="cursor: pointer;">
        <template #trigger>
          <n-button @click="showModal = true" id="supporter">
            <i class="fa-solid fa-crop-simple"></i>
          </n-button>
        </template>
        Tạo frame avatar.
      </n-tooltip>
  
      <n-modal v-model:show="showModal">
        <n-card style="width: 800px; height: 550px ; border-radius: 15px;box-sizing: border-box;" :bordered="false" size="huge" role="dialog" aria-modal="true">
          <h2>Tạo frame avatar cùng chúng mình nhé !!!</h2>

          <div class="crop" style="height:350px ; display: flex; justify-content: space-between; margin: 20px 50px;">
            <div v-if="image">
              <vue-cropper
                style="width: 250px; height: 250px;"
                ref="cropperRef"
                :src="image"
                :aspect-ratio="1"
                :view-mode="1"
                :auto-crop="true"
                :auto-crop-area="1"
                :max-container-width="250"
                :max-container-height="250"
                :crop-box-resizable="true"
                :crop-box-movable="true"
                :background="false"
                :responsive="true"
                :checkCrossOrigin="true"
                :modal="false"
              />
            </div>
            <span v-else class="slot_image" style="width: 250px; height: 250px; border: 3px solid #398ae7; border-radius: 10px; display: flex; justify-content: center; align-items: center; text-align: center;">Hãy chọn bức ảnh mà bạn thích nhất nhé</span>
            <div  class="frame-wrapper" style="position: relative; width: 250px; height: 250px;">
              <img src="@/assets/img/frame.png" alt="Frame" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 2; border-radius: 10px;">
              <img v-if="croppedImage" :src="croppedImage" alt="Cropped Image" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; border-radius: 10px;">
            </div>
          </div>

          <div class="button">
            <n-button class="btn buttonUpload"><label><input hidden type="file" @change="onFileChange" :key="safeKey()"/>Tải ảnh lên</label></n-button>
            <n-button class="btn cropAvatar" @click="cropImage">Tạo frame avatar</n-button>
            <n-button class="btn buttonDownload" @click="downloadImage">Tải xuống</n-button>
          </div>
          <template #footer>
            ...
          </template>
        </n-card>
      </n-modal>
    </div>
  </template>
  
  <style lang="scss" scoped>
  @import '@styles/_mixins.scss';
  #supporter {
    z-index: 9999;
    position: fixed;
    right: 1.5%;
    top: 60%;
    transform-origin: bottom center;
    transform: translate(0, -100%) rotateZ(-90deg) translateY(150%);
    cursor: pointer;
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
    @include mobile{
      right: 5%;
    }
  }
  
  #supporter:hover {
    background: rgba(80, 131, 241, 0.75);
  }
  img{
    width: 30%;
  }
.buttonUpload{
    color: #333;
}
.buttonDownload{
}
.button{
  display: flex;
  justify-content: space-around;
}
.btn{
  border:1px solid #6ea3f1;
  padding: 20px 40px;
  border-radius:10px;
}
.btn:hover{
  background: #6ea3f1;
  color: #fff;
}
</style>
  