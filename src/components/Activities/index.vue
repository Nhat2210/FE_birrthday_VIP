<script lang="ts" setup>
import { useRouter } from 'vue-router';
const { push } = useRouter();
const handleRouter = () => {
  push('/signup')
}
</script>

<template>
  <div class="wrapper">
    <h2 class="title" 
    data-aos="fade-out"
    data-aos-duration="300"
    data-aos-offset="100"
    data-aos-easing="ease-in-out"
    >
      Một năm đầy <span>thăng trầm</span>
    </h2>
    <div class="infor">
      <n-carousel
      data-aos="fade-right"
      data-aos-duration="300"
      data-aos-delay="200"
      data-aos-easing="ease-in-out"
      data-aos-offset="100"  

      effect="custom"
      :transition-props="{ name: 'creative' }"
      show-arrow="true"
      autoplay="false" 
      style="
      width: 35%;
      height: 700px;
      /* object-fit: cover; */
      height: 350px;
      border-radius: 15px;
      "
      :style="{
        '--n-arrow-color': '#6ea3f1',
        '--n-dot-color-focus': '#6ea3f1',
        '--n-dot-color-active': '#6ea3f1',
        '--n-arrow-background': '#333',

      }"
      >
        <n-carousel-item>
          <div class="carousel-item-content">
            <img
              class="carousel-img"
              src="@/assets/img/activities/act_1.jpg"
            />
            <p class="carousel-caption">Title 1</p>
          </div>
        </n-carousel-item>
        <n-carousel-item>
          <div class="carousel-item-content">
            <img
              class="carousel-img"
              src="@/assets/img/activities/act_2.jpg"
            />
            <p class="carousel-caption">Title 2</p>
          </div>
        </n-carousel-item>
        <n-carousel-item>
          <div class="carousel-item-content">
            <img
              class="carousel-img"
              src="@/assets/img/activities/act_3.jpg"
            />
            <p class="carousel-caption">Title 3</p>
          </div>
        </n-carousel-item>
        <n-carousel-item>
          <div class="carousel-item-content">
            <img
              class="carousel-img"
              src="@/assets/img/activities/act_4.jpg"
            />
            <p class="carousel-caption">Title 4</p>
          </div>
        </n-carousel-item>
        <n-carousel-item>
          <div class="carousel-item-content">
            <img
              class="carousel-img"
              src="@/assets/img/activities/act_5.jpg"
            />
            <p class="carousel-caption">Title 5</p>
          </div>
        </n-carousel-item>
      </n-carousel>
      <div class="content">
        <p class="text"
        data-aos="fade-left"
        data-aos-duration="300"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
        data-aos-offset="100"  
        
        >
          Lorem ipsum dolor sit amet consectetur,<br>
          adipisicing elit. Aspernatur, placeat assumenda. 
        </p>
        <AnimateButton
        data-aos="fade-left"
        data-aos-duration="300"
        data-aos-delay="200"
        data-aos-easing="ease-in-out"
        data-aos-offset="100"  
        @click="handleRouter()"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@styles/_mixins.scss';
.wrapper {
  background: #f6f6f6;
  box-sizing: border-box;
  padding: 100px 0;
  @include mobile{
    padding: 50px 0;
  }
}
.n-carousel {
  margin-left: 100px;
  @include mobile{
    margin: 0 auto;
  }
}

.infor {
  position: relative;
}

.content {
  position: absolute;
  top: 100px;
  right: 100px;
  @include mobile{
    display: none;
  }
}

.title {
  position: relative;
  margin: 0 auto;
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 50px;
  max-width: 60%;
  z-index: 1;
  @include mobile{
    font-size: 22px;
    max-width: 100%;
  }
}

.title::before {
  content: '';
  position: absolute;
  left: 12px;
  bottom: 55px;
  width: 95%;
  height: 15px;
  background: linear-gradient(to bottom, #398ae7, #ffffff);
  z-index: -1;
  @include mobile{
    bottom: 50px;
    left: 9px;
  }
}

.carousel-img {
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
  @include mobile{
    width: 100%;
    margin: 0 auto;
  }
}

.carousel-item-content {
  text-align: center;
  position: relative;
}
.carousel-caption {
  position: absolute;
  bottom: 100%;
  font-size: 16px;
  color: #333;
}
.n-carousel.n-carousel--bottom .n-carousel__arrow-group{
  right: 0;
  top: 0;
}
.n-carousel.n-carousel--show-arrow.n-carousel--bottom .n-carousel__dots{
  top: 0;
  left: 0;
}
:deep(.creative-enter-from),
:deep(.creative-leave-to) {
  opacity: 0;
  transform: scale(0.8);
}

:deep(.creative-enter-active),
:deep(.creative-leave-active) {
  transition: all 0.3s ease;
}
</style>
