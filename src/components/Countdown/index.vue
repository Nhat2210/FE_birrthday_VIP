<script setup lang="ts">
const day = ref<number>(0);
const hour = ref<number>(0);
const minutes = ref<number>(0);
const second = ref<number>(0)
const birthday=  new Date(2024, 9, 10).getTime();

const check = false;

const updateTime = () => {
    const now: number = new Date().getTime();
    const distance: number = birthday - now;
    day.value = Math.floor(distance / (1000 * 60 * 60 * 24));
    hour.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    second.value = Math.floor((distance % (1000 * 60)) / 1000);
    if(birthday - now < 0){
        second.value = 0;
        minutes.value = 0;
        hour.value = 0;
        second.value = 0;
        clearInterval(interval);
    }
};
onBeforeMount(updateTime);
let interval: ReturnType<typeof setTimeout> = setInterval(() => {
    updateTime();

}, 1000);
const refactorNumber = (number: number): string | number => (number < 10 ? `0${number}` : number);
</script>
<template>
        <!--start countdown-->
        <div class="countdown">
            <div class="countdown_image">
                <img src="@/assets/img/countdown.jpg" alt="">
            </div>
            <div class="countdown_number">
                <div class="countdown_number_day group">
                    <span class="number">
                        {{ refactorNumber(day) }}
                    </span>
                    <span class="label">days</span>
                </div>
                :
                <div class="countdown_number_hour group">
                    <span class="number">
                        {{ refactorNumber(hour) }}
                    </span>
                    <span class="label">hours</span>
                </div>
                :
                <div class="countdown_number_minute group">
                    <span class="number">
                        {{ refactorNumber(minutes) }}
                    </span>
                    <span class="label">minutes</span>
                </div>
                :
                <div class="countdown_number_second group">
                    <span class="number">
                        {{ refactorNumber(second) }}
                    </span>
                    <span class="label">seconds</span>
                </div>
            </div>
        </div>
        <!--end countdown-->
</template>

<style lang="scss" scoped>
@import '@styles/_mixins.scss';
    .countdown{
    position: relative;
    width: 100%;
    &_image{
        position: relative;
        z-index: 1;
        img{
            display: block;
            margin: 0 auto;
            width: 70%;
            border-radius: 15px;
            object-fit: cover;
            object-position: 100% 0;
            height: 550px;
            @include mobile{
                width: 99%;
                height: 100%;
            }
        }   
    }
    &_number{
        position: absolute;
        color: white;
        font-size: 100px;
        font-weight: 800;
        text-align: center;
        top: 50%;
        font-family: 'VintageGlamour';
        src: url('@/assets/fonts/VintageGlamourRegular-ALX27.ttf') format('truetype');
         font-weight: normal;
        font-style: normal;

        left:50%;
        transform: translate(-50%, -10%);
        z-index: 10;
        display: flex;
        gap: 10px;
        @include mobile{
            font-size: 30px;
            gap:3px;
            margin-top: 10px;
        }
        .group{
            display: flex;
            flex-direction: column;
        }
        .label{
            font-size: 40px;
            font-family: "Lora", serif;
            @include mobile{
                font-size: 20px;
            }
        }
    }
    }
</style>