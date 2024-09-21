<script lang="ts" setup>
import { useRouter } from 'vue-router';
const { push } = useRouter();
const handleRouter = () => {
  push('/signup')
}
import { onMounted } from 'vue';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

onMounted(() => {
  document.documentElement.style.setProperty('--swiper-navigation-size', '20px');
  const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
      delay: 5000, 
    },
  });
});
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
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="carousel-item-content">
              <img
                class="img"
                src="@/assets/img/activities/act_1.jpg"
              />
              <p class="caption">Lễ chuyển giao nhiệm kì Khóa 13 - 7/1/2024</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="carousel-item-content">
              <img
                class="img"
                src="@/assets/img/activities/act_2.jpg"
              />
              <p class="caption">Tet at home 2024 - 21/2/2024</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="carousel-item-content">
              <img
                class="img"
                src="@/assets/img/activities/act_3.jpg"
              />
              <p class="caption">Boy's Day 2024 - 7/4/2024</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="carousel-item-content">
              <img
                class="img"
                src="@/assets/img/activities/act_4.jpg"
              />
              <p class="caption">Tây Hunting 2024 - 16/6/2024</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="carousel-item-content">
              <img
                class="img"
                src="@/assets/img/activities/act_5.jpg"
              />
              <p class="caption">Camping 2024 - 14/7/2024</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="carousel-item-content">
              <img
                class="img"
                src="@/assets/img/activities/act_6.jpg"
              />
              <p class="caption">Tuyển thành viên Gen 13 - 9/9/2024</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="carousel-item-content">
              <img
                class="img"
                src="@/assets/img/activities/act_7.jpg"
              />
              <p class="caption">Trung thu 5 CLB  2024 (V.I.P, HIT, 4C, AAA, BAH) - 17/9/2024</p>
            </div>
          </div>
        </div>

        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
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
  @include mobile {
    padding: 50px 0;
  }
}

.infor {
  position: relative;
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
  @include mobile {
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

.img {
  width: 100%;
  border-radius: 15px;
  object-fit: cover;
  height: 450px;
  @include mobile {
    width: 100%;
    margin: 0 auto;
  }
}

.carousel-item-content {
  text-align: center;
  width: 50%;
  position: relative;
  margin: 0 auto;
}

.caption {
  margin-top: 20px; 
  font-size: 20px;
  color: #333;
}

.swiper-button-prev,
.swiper-button-next {
  position: absolute; 
  top: 50%;
  transform: translateY(-50%);
  z-index: 10; 
  color: #333; 
  background: #fff; 
  border-radius: 50%; 
  width: 30px; 
  height: 30px; 
  display: flex;
  align-items: center;
  justify-content: center;
}


.swiper-button-prev {
  left: 26%; 
}

.swiper-button-next {
  right: 26%; 
}

.swiper-pagination {
  bottom: 20%; 
}
</style>
