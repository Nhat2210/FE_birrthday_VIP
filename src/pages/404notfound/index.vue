<script setup lang="ts">
import { useRouter } from 'vue-router';
const { push } = useRouter();
const handleClick = () =>{
    push('/signup')
}
</script>
<template>
<div class="wrapper">
    <div class="logo">
        <a target="_blank" href="https://www.facebook.com/clbtienganhV.I.P.haui?locale=vi_VN"><img src="@/assets/img/favicon.png" alt=""></a>
    </div>
    <h1>Uh-Oh...</h1>
    <p>Hình như bạn đang đi lạc phải không</p>
    <p>Để tôi giúp bạn quay trở lại nhé</p>
    <p>Hãy click vào nút bên dưới để tham gia sự kiện chúc mừng <span>sinh nhật V.I.P 13</span> tuổi nhé</p>
    <AnimateButton @click="handleClick()"/>

</div>
<!-- <Footer/> -->
</template>
<style scoped lang="scss">
@import '@styles/_mixins.scss';

.wrapper{
    margin: 50px;
    .logo{
        left: 120px;
        top: 50px;
        position: absolute;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 4px solid #6ea3f1;
        @include mobile{
            left: 40px;
            top: 40px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        img{
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: contain;
            @include mobile{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                object-fit: contain;
            }
        }
    }
    h1{
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 50px;
        background: linear-gradient(to right, #398ae7, #8271bb);
        -webkit-background-clip: text; 
        color: transparent; 
    }
    p{
        font-size: 24px;
        text-align: center;
        span{
            background: linear-gradient(to right, #398ae7, #8271bb);
            -webkit-background-clip: text; 
            color: transparent; 
        }
    }
    button{
        display: block;
        margin: 0 auto;
        margin-top: 50px;
        border-radius: 999px;
        font-size: 18px;
    }
}
</style>