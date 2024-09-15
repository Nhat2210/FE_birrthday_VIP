<script lang="ts" setup></script>

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
        autoplay="true"
        style="width: 45%; height: 350px"
        class="custom_arrow"
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
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  background: #f6f6f6;
  height: 100vh;
  box-sizing: border-box;
}

.n-carousel {
  margin-left: 100px;
}

.infor {
  position: relative;
}

.text {
  position: absolute;
  top: 100px;
  right: 100px;
}

.title {
  position: relative;
  margin: 0 auto;
  font-size: 35px;
  text-align: center;
  text-transform: uppercase;
  padding-top: 100px;
  padding-bottom: 50px;
  max-width: 600px;
  z-index: 1;
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
}

.carousel-img {
  width: 100%;
  height: 350px;
  border-radius: 15px;
  object-fit: cover;
}

.carousel-item-content {
  text-align: center;
  position: relative;
}

.carousel-caption {
  margin-top: 10px;
  font-size: 16px;
  color: #333;
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
