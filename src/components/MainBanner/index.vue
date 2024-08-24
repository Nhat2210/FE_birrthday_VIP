<script setup lang="ts">
import gsap from 'gsap';

const { push } = useRouter();

const step = inject('step')
</script>

<template>
    <section id="main-banner">
        <div class="container">
            <div class="introduction">
                <h1>
                    Sinh nhật thứ 13 <br>
                    Câu lạc bộ Tiếng Anh VIP
                </h1>
                <p class="first">

                </p>
                <p class="second">

                </p>
                <button @click="step = 2">
                    <span>Tham gia ngay</span>
                    <div class="icon-wrapper">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" />
                    </div>
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
</style>