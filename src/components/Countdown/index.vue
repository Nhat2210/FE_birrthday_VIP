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
                    <span class="label">day</span>
                </div>
                :
                <div class="countdown_number_hour group">
                    <span class="number">
                        {{ refactorNumber(hour) }}
                    </span>
                    <span class="label">hour</span>
                </div>
                :
                <div class="countdown_number_minute group">
                    <span class="number">
                        {{ refactorNumber(minutes) }}
                    </span>
                    <span class="label">minute</span>
                </div>
                :
                <div class="countdown_number_second group">
                    <span class="number">
                        {{ refactorNumber(second) }}
                    </span>
                    <span class="label">second</span>
                </div>
            </div>
        </div>
        <!--end countdown-->
</template>

<style lang="scss" scoped>
    .countdown{
    position: relative;
    padding: 30px 0; 
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
        }   
    }
    &_number{
        src:url(@/assets/fonts/RayleighglamourRegular-51YJz.otf);
        position: absolute;
        color: white;
        font-size: 70px;
        font-weight: 800;
        text-align: center;
        top: 50%;
        font-family: "RayleightGlamourRegular-51YJz";
        left:50%;
        transform: translate(-50%, 10%);
        z-index: 10;
        display: flex;
        gap: 15px;
        .group{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .label{
            font-size: 24px;
        }
    }
    }
</style>